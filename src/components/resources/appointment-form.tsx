"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Phone, ShieldCheck } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactRequestSchema, type ContactRequestValues } from "@/lib/marketing-forms";
import { interpolate, useResourceLang } from "./i18n";

type SubmissionResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

const MESSAGE_PREFIX = "[Appointment request - from /resources]\n";

// The server validates the FULL prefixed string against contactRequestSchema's
// message.max(600). Reserve room for the prefix client-side so the client and
// server agree: 560 user chars + 40 prefix chars = exactly the server's max(600).
const MESSAGE_MAX = 600 - MESSAGE_PREFIX.length;

export function AppointmentForm() {
  const { t } = useResourceLang();
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Tighten the message bound so a too-long message is caught (and highlighted)
  // client-side before it can dead-end against the server's prefixed max(600).
  // Memoized on `t` so the error string stays localized when language changes.
  const appointmentSchema = useMemo(
    () =>
      contactRequestSchema.extend({
        message: contactRequestSchema.shape.message.refine(
          (value: string) => value.length <= MESSAGE_MAX,
          { message: t.apptMessageTooLong },
        ),
      }),
    [t.apptMessageTooLong],
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactRequestValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const messageValue = useWatch({ control, name: "message" }) ?? "";

  async function onSubmit(values: ContactRequestValues) {
    setSubmissionMessage(null);
    setSubmissionError(null);

    const payload: ContactRequestValues = {
      ...values,
      message: `${MESSAGE_PREFIX}${values.message}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as SubmissionResponse | null;

      if (!response.ok) {
        setSubmissionError(result?.error ?? t.apptError);
        return;
      }

      setSubmissionMessage(result?.message ?? t.apptSuccess);
      reset();
    } catch {
      setSubmissionError(t.apptError);
    }
  }

  return (
    <Section
      id="appointment"
      eyebrow={t.apptEyebrow}
      title={t.apptTitle}
      description={t.apptDescription}
      className="py-16 sm:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="animate-fade-up rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
          {submissionMessage ? (
            <div
              role="status"
              className="mb-6 rounded-xl border border-[var(--accent)] bg-[var(--surface-muted)] p-5 text-base leading-7 text-[var(--primary-strong)]"
            >
              {submissionMessage}
            </div>
          ) : null}

          {submissionError ? (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-5 text-base leading-7 text-rose-900"
            >
              {submissionError}
            </div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <FormField htmlFor="appt-name" label={t.apptName} error={errors.name?.message} required>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="appt-name"
                    autoComplete="name"
                    placeholder={t.apptNamePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                  />
                )}
              />
            </FormField>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField htmlFor="appt-phone" label={t.apptPhone} error={errors.phone?.message} required>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="appt-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t.apptPhonePlaceholder}
                      aria-invalid={Boolean(errors.phone)}
                    />
                  )}
                />
              </FormField>

              <FormField htmlFor="appt-email" label={t.apptEmail} error={errors.email?.message} required>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="appt-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.apptEmailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                    />
                  )}
                />
              </FormField>
            </div>

            <FormField
              htmlFor="appt-message"
              label={t.apptMessage}
              description={t.apptMessageDesc}
              error={errors.message?.message}
              required
            >
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="appt-message"
                    maxLength={MESSAGE_MAX}
                    placeholder={t.apptMessagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby="appt-message-counter"
                  />
                )}
              />
              <p
                id="appt-message-counter"
                className="text-right text-xs tabular-nums text-[var(--text-muted)]"
                aria-live="polite"
              >
                {interpolate(t.apptMessageCounter, { n: messageValue.length })}
              </p>
            </FormField>

            <p className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-4 text-sm leading-6 text-[var(--text-muted)]">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--secondary)]" aria-hidden="true" />
              {t.apptPrivacy}
            </p>

            <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? t.apptSubmitting : t.apptSubmit}
            </Button>
          </form>
        </div>

        <aside className="animate-fade-up animate-delay-150 rounded-[1.5rem] border border-[var(--border)] bg-brand-mesh p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <p className="eyebrow text-xs font-semibold text-[var(--secondary)]">{t.apptCallInstead}</p>
          <a
            href="tel:+15094521000"
            className="mt-3 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[var(--primary)] px-5 text-lg font-semibold text-white transition hover:bg-[var(--primary-strong)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {t.apptCallNumber}
          </a>
          <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">{t.apptPrivacy}</p>
        </aside>
      </div>
    </Section>
  );
}
