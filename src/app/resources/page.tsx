import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/marketing";
import { ResourcesPageClient } from "@/components/resources/resources-page-client";

export const metadata: Metadata = {
  ...buildPageMetadata(
    "Yakima County Community Resources",
    "A free, private directory of local Yakima County help — mental health, substance use, housing, food, benefits, and more — plus request an appointment with Valley Health & Counseling.",
  ),
  // Unlisted preview page: keep it out of search indexes until it's public.
  robots: { index: false, follow: false },
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
