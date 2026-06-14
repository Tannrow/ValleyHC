"use client";

import { Search, CalendarCheck, Sparkles } from "lucide-react";

import { useResourceLang } from "./i18n";
import { LanguageToggle } from "./language-toggle";
import { buttonVariants } from "@/components/ui/button";

/**
 * Localized hero for /resources. Built bespoke (not the shared PageHero
 * component) so it can host the scoped EN/ES toggle and an info aside, while
 * matching PageHero's exact layout + tokens to stay native.
 */
export function ResourcesHero() {
  const { t } = useResourceLang();

  return (
    <section className="px-4 pt-10 sm:px-6">
      <div className="mx-auto grid max-w-[1100px] animate-fade-up gap-8 rounded-[2rem] border border-[var(--border)] bg-brand-mesh px-8 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow text-xs font-semibold text-[var(--secondary)]">{t.heroEyebrow}</p>
            <LanguageToggle />
          </div>
          <div className="space-y-6">
            <h1 className="display-title text-balance text-4xl text-[var(--site-foreground)] md:text-[3.6rem]">
              {t.heroTitle}
            </h1>
            <p className="text-pretty max-w-xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              {t.heroDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#directory" className={buttonVariants({ variant: "primary", size: "lg" })}>
              <Search className="h-5 w-5" aria-hidden="true" />
              {t.heroFindHelp}
            </a>
            <a href="#appointment" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {t.heroRequest}
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t.heroAsideTitle}
          </p>
          <p className="mt-4 display-title text-3xl text-[var(--primary)]">{t.heroAsideStat}</p>
          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{t.heroAsideBody}</p>
        </div>
      </div>
    </section>
  );
}
