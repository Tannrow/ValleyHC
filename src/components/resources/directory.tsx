"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  communityResources,
  resourceCategories,
  searchResources,
  type CommunityResource,
} from "@/lib/resources-data";
import { useResourceLang, interpolate } from "./i18n";
import { useDirectory } from "./directory-context";
import { ResourceCard } from "./resource-card";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 18;

// Sort categories by descending count so the most-stocked filters lead.
const sortedCategories = [...resourceCategories].sort((a, b) => b.count - a.count);

function filterResources(
  search: string,
  activeCategories: string[],
): CommunityResource[] {
  const base = search.trim() ? searchResources(search) : communityResources;
  if (activeCategories.length === 0) return base;
  const active = new Set(activeCategories);
  return base.filter((r) => r.categories.some((c) => active.has(c)));
}

export function Directory() {
  const { lang, t } = useResourceLang();
  const {
    activeCategories,
    toggleCategory,
    clearCategories,
    setActiveCategories,
    search,
    setSearch,
    scrollSignal,
  } = useDirectory();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const headingRef = useRef<HTMLDivElement>(null);

  const results = useMemo(
    () => filterResources(search, activeCategories),
    [search, activeCategories],
  );

  // Reset pagination whenever the filter set changes.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, activeCategories]);

  // Respond to the needs-finder's scroll request.
  useEffect(() => {
    if (scrollSignal === 0) return;
    headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollSignal]);

  const visible = results.slice(0, visibleCount);
  const hasMore = visibleCount < results.length;

  const resultLabel =
    results.length === 0
      ? t.resultsNone
      : results.length === 1
        ? t.resultsOne
        : interpolate(t.resultsMany, { n: results.length });

  const hasFilters = activeCategories.length > 0 || search.trim().length > 0;

  return (
    <Section
      id="directory"
      eyebrow={t.dirEyebrow}
      title={t.dirTitle}
      description={t.dirDescription}
      className="bg-[var(--surface-muted)] py-16 sm:py-20"
    >
      <div ref={headingRef} className="section-anchor-offset">
        {/* Search */}
        <div className="relative max-w-xl">
          <label htmlFor="resource-search" className="sr-only">
            {t.searchLabel}
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-muted)]"
            aria-hidden="true"
          />
          <input
            id="resource-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.searchPlaceholder}
            className="h-12 w-full rounded-xl border border-[var(--border)] bg-white pl-12 pr-12 text-base text-[var(--site-foreground)] outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--ring)]"
          />
          {search ? (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label={t.clearFilters}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-muted)] transition hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {/* Category chips */}
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={t.dirTitle}>
          <button
            type="button"
            onClick={() => setActiveCategories([])}
            aria-pressed={activeCategories.length === 0}
            className={cn(
              "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]",
              activeCategories.length === 0
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--border)] bg-white text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--primary)]",
            )}
          >
            {t.filterAll}
            <span className="text-xs opacity-80">{communityResources.length}</span>
          </button>
          {sortedCategories.map((cat) => {
            const isActive = activeCategories.includes(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => toggleCategory(cat.key)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]",
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-[var(--border)] bg-white text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--primary)]",
                )}
              >
                {lang === "es" ? cat.labelEs : cat.label}
                <span className="text-xs opacity-80">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Results header */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[var(--primary)]" role="status" aria-live="polite">
            {resultLabel}
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={() => {
                clearCategories();
                setSearch("");
              }}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-[var(--secondary)] underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              {t.clearFilters}
            </button>
          ) : null}
        </div>

        {/* Results grid */}
        {results.length === 0 ? (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-white p-10 text-center">
            <p className="text-lg font-semibold text-[var(--site-foreground)]">{t.resultsNone}</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{t.resultsNoneHelp}</p>
          </div>
        ) : (
          <>
            <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((resource, index) => (
                <li
                  key={resource.id}
                  className={cn("animate-fade-up", index % 3 === 1 && "animate-delay-150", index % 3 === 2 && "animate-delay-300")}
                >
                  <ResourceCard resource={resource} />
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-sm text-[var(--text-muted)]">
                {interpolate(t.showingCount, { shown: visible.length, total: results.length })}
              </p>
              {hasMore ? (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  {t.loadMore}
                </Button>
              ) : null}
              <p className="text-xs text-[var(--text-muted)]">{t.verifyNote}</p>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
