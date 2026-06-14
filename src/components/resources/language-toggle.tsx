"use client";

import { useResourceLang, type Lang } from "./i18n";
import { cn } from "@/lib/utils";

/**
 * Self-contained EN/ES segmented toggle scoped to /resources. Does NOT change
 * the global <html lang>. Choice persists via the provider's localStorage.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useResourceLang();

  const options: { value: Lang; label: string }[] = [
    { value: "en", label: t.langEnglish },
    { value: "es", label: t.langSpanish },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-white p-1 shadow-[var(--shadow-soft)]",
        className,
      )}
      role="group"
      aria-label={t.langToggleLabel}
    >
      {options.map((option) => {
        const isActive = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            aria-pressed={isActive}
            lang={option.value}
            className={cn(
              "min-h-9 rounded-full px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]",
              isActive
                ? "bg-[var(--primary)] text-white"
                : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--primary)]",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
