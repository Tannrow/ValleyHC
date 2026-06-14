"use client";

import { Phone, MessageSquare, AlertTriangle } from "lucide-react";

import { useResourceLang } from "./i18n";

/**
 * Always-visible crisis banner pinned to the very top of the content. 988
 * call + text, 911, and the local DV line. Non-emergency framing so people
 * who aren't in crisis still understand the directory is below.
 */
export function CrisisBanner() {
  const { t } = useResourceLang();

  return (
    <section className="px-4 pt-6 sm:px-6" aria-labelledby="crisis-heading">
      <div className="mx-auto max-w-[1100px]">
        <div className="animate-fade-up rounded-[1.5rem] border border-rose-200 bg-rose-50 p-6 shadow-[var(--shadow-soft)] sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                {t.crisisEyebrow}
              </p>
              <h2 id="crisis-heading" className="text-lg font-semibold text-rose-900">
                {t.crisisTitle}
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-rose-800">{t.crisisBody}</p>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-col md:items-stretch">
              <a
                href="tel:988"
                aria-label={`${t.crisisCall988} — ${t.crisisLifeline}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-rose-700 px-5 text-sm font-semibold text-white transition hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t.crisisCall988}
              </a>
              <a
                href="sms:988"
                aria-label={`${t.crisisText988} — ${t.crisisLifeline}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-300 bg-white px-5 text-sm font-semibold text-rose-800 transition hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                {t.crisisText988}
              </a>
              <a
                href="tel:911"
                aria-label={t.crisisCall911}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-300 bg-white px-5 text-sm font-semibold text-rose-800 transition hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t.crisisCall911}
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-rose-200 pt-4 text-xs text-rose-700">
            <span className="font-semibold">{t.crisisAvailable}</span>
            <a
              href="tel:5092487796"
              className="underline decoration-rose-300 underline-offset-2 transition hover:text-rose-900"
            >
              {t.crisisDvLine}: (509) 248-7796
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
