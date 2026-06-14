"use client";

import { Phone, Globe, MapPin, Clock } from "lucide-react";

import type { CommunityResource } from "@/lib/resources-data";
import { resourceCategories } from "@/lib/resources-data";
import { useResourceLang } from "./i18n";
import { buildMapsUrl, buildTelHref, displayHost } from "./helpers";
import { cn } from "@/lib/utils";

// Lookup for category chip labels (localized).
const categoryByKey = new Map(resourceCategories.map((c) => [c.key, c]));

type ResourceCardProps = {
  resource: CommunityResource;
  className?: string;
};

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const { lang, t } = useResourceLang();
  const telHref = buildTelHref(resource.phone);
  const mapsUrl = buildMapsUrl(resource);
  const host = displayHost(resource.website);

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-panel)]",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {resource.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- external logos; next/image remotePatterns not configured (additive-only)
          <img
            src={resource.logoUrl}
            alt=""
            loading="lazy"
            className="h-12 w-12 flex-shrink-0 rounded-lg border border-[var(--border)] bg-white object-contain p-1"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] text-base font-semibold text-[var(--primary)]"
          >
            {resource.name.trim().charAt(0).toUpperCase()}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug text-[var(--site-foreground)]">{resource.name}</h3>
          {resource.city ? (
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-[var(--secondary)]">{resource.city}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{resource.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {resource.categories.map((key) => {
          const cat = categoryByKey.get(key);
          if (!cat) return null;
          return (
            <span
              key={key}
              className="inline-flex items-center rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--primary)]"
            >
              {lang === "es" ? cat.labelEs : cat.label}
            </span>
          );
        })}
      </div>

      {resource.address || resource.hours ? (
        <dl className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
          {resource.address ? (
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--secondary)]" aria-hidden="true" />
              <dd className="leading-6">{resource.address}</dd>
            </div>
          ) : null}
          {resource.hours ? (
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--secondary)]" aria-hidden="true" />
              <dd className="leading-6">
                <span className="sr-only">{t.hoursLabel}: </span>
                {resource.hours}
              </dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {telHref ? (
          <a
            href={telHref}
            aria-label={`${t.callLabel} ${resource.name}: ${resource.phone}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {resource.phone}
          </a>
        ) : null}
        {resource.website ? (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.websiteLabel}: ${resource.name}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-white px-4 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {host ?? t.websiteLabel}
          </a>
        ) : null}
        {mapsUrl ? (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.mapsLabel}: ${resource.name}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-white px-4 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t.mapsLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
