"use client";

import { ResourceLangProvider } from "./i18n";
import { DirectoryProvider } from "./directory-context";
import { ResourcesHero } from "./resources-hero";
import { CrisisBanner } from "./crisis-banner";
import { NeedsFinder } from "./needs-finder";
import { Directory } from "./directory";
import { AppointmentForm } from "./appointment-form";
import { ResourcesFinalCta } from "./resources-final-cta";

/**
 * Single client island for /resources. Wraps the section in the scoped EN/ES
 * language provider and the shared directory-filter provider so the
 * needs-finder can drive the directory. Rendered inside the real site shell
 * (header + footer + sticky mobile CTA) with no changes to existing files.
 */
export function ResourcesPageClient() {
  return (
    <ResourceLangProvider>
      <DirectoryProvider>
        <CrisisBanner />
        <ResourcesHero />
        <NeedsFinder />
        <Directory />
        <AppointmentForm />
        <ResourcesFinalCta />
      </DirectoryProvider>
    </ResourceLangProvider>
  );
}
