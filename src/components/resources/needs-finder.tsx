"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useResourceLang } from "./i18n";
import { useDirectory } from "./directory-context";
import { needOptions, needsToCategories } from "./helpers";
import { cn } from "@/lib/utils";

/**
 * Friendly, non-clinical checkbox questionnaire. On submit, maps selected
 * needs to category keys, sets the directory filters, and scrolls the
 * directory into view. Crisis is intentionally not an option here.
 */
export function NeedsFinder() {
  const { lang, t } = useResourceLang();
  const { setActiveCategories, requestScrollToDirectory } = useDirectory();
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  }

  function handleSubmit() {
    setActiveCategories(needsToCategories(selected));
    requestScrollToDirectory();
  }

  function handleClear() {
    setSelected([]);
  }

  return (
    <Section
      id="needs-finder"
      eyebrow={t.needsEyebrow}
      title={t.needsTitle}
      description={t.needsDescription}
      className="py-16 sm:py-20"
    >
      <fieldset className="animate-fade-up">
        <legend className="sr-only">{t.needsTitle}</legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {needOptions.map((option) => {
            const isChecked = selected.includes(option.id);
            const label = lang === "es" ? option.labelEs : option.labelEn;
            return (
              <label
                key={option.id}
                className={cn(
                  "flex min-h-[3.25rem] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus-within:ring-4 focus-within:ring-[var(--ring)]",
                  isChecked
                    ? "border-[var(--accent)] bg-[var(--surface-muted)] text-[var(--primary-strong)]"
                    : "border-[var(--border)] bg-white text-[var(--site-foreground)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]",
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => toggle(option.id)}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 transition",
                    isChecked
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--border-strong)] bg-white",
                  )}
                >
                  {isChecked ? <Check className="h-4 w-4" /> : null}
                </span>
                <span>{label}</span>
              </label>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={selected.length === 0}
          >
            {t.needsShow}
          </Button>
          {selected.length > 0 ? (
            <Button variant="ghost" size="lg" onClick={handleClear}>
              {t.needsClear}
            </Button>
          ) : (
            <p className="text-sm text-[var(--text-muted)]">{t.needsSelectHint}</p>
          )}
        </div>
      </fieldset>
    </Section>
  );
}
