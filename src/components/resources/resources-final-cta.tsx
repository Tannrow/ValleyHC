"use client";

import { CalendarCheck, Phone } from "lucide-react";

import { useResourceLang } from "./i18n";
import { buttonVariants } from "@/components/ui/button";

/**
 * Localized closing CTA. Mirrors the shared FinalCtaSection styling/tokens but
 * is language-aware via the scoped dict and links to the on-page form.
 */
export function ResourcesFinalCta() {
  const { t } = useResourceLang();

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-[1100px] rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(15,76,92,0.98),rgba(44,122,123,0.96))] px-8 py-12 text-white shadow-[var(--shadow-soft)]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow text-xs font-semibold text-white/72">{t.apptEyebrow}</p>
            <h2 className="display-title text-balance text-4xl text-white md:text-[3.4rem]">{t.ctaTitle}</h2>
            <p className="max-w-xl text-base leading-8 text-white/84">{t.ctaDescription}</p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#appointment" className={buttonVariants({ variant: "accent", size: "lg" })}>
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {t.ctaPrimary}
            </a>
            <a href="tel:+15094521000" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
