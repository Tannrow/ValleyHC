import type { CommunityResource } from "@/lib/resources-data";

/** Build a Google Maps search URL from an org's address (or address + city). */
export function buildMapsUrl(resource: Pick<CommunityResource, "address" | "city" | "name">): string | null {
  const parts = [resource.address, resource.city].filter(Boolean) as string[];
  const query = parts.length > 0 ? parts.join(", ") : resource.name;
  if (!query) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Build a `tel:` href from a display phone string, keeping a single leading `+`. */
export function buildTelHref(phone: string | null): string | null {
  if (!phone) return null;
  // Keep digits; preserve an explicit leading "+" (e.g. +1).
  const hasPlus = phone.trim().startsWith("+");
  const digits = phone.replace(/[^\d]/g, "");
  if (!digits) return null;
  return `tel:${hasPlus ? "+" : ""}${digits}`;
}

/** Normalize a website URL into a clean, clickable display host. */
export function displayHost(website: string | null): string | null {
  if (!website) return null;
  try {
    const url = new URL(website);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  }
}

/**
 * Needs-finder options. Plain, non-clinical language mapped to category keys.
 * Crisis is intentionally NOT an option — the crisis banner covers it.
 */
export type NeedOption = {
  id: string;
  labelEn: string;
  labelEs: string;
  /** Category keys this need maps to in the directory. */
  categories: string[];
};

export const needOptions: NeedOption[] = [
  {
    id: "stay",
    labelEn: "Somewhere to stay",
    labelEs: "Un lugar donde quedarme",
    categories: ["housing", "recovery_housing"],
  },
  {
    id: "food",
    labelEn: "Food for me or my family",
    labelEs: "Comida para mí o mi familia",
    categories: ["food"],
  },
  {
    id: "ride",
    labelEn: "A ride or transportation",
    labelEs: "Transporte o un viaje",
    categories: ["transportation"],
  },
  {
    id: "treatment",
    labelEn: "Help with alcohol or drugs",
    labelEs: "Ayuda con alcohol o drogas",
    categories: ["substance_use_treatment", "recovery_support", "harm_reduction"],
  },
  {
    id: "talk",
    labelEn: "Someone to talk to",
    labelEs: "Alguien con quien hablar",
    categories: ["mental_health"],
  },
  {
    id: "money",
    labelEn: "Help paying bills or rent",
    labelEs: "Ayuda para pagar cuentas o renta",
    categories: ["financial_assistance", "benefits_dshs"],
  },
  {
    id: "benefits",
    labelEn: "Benefits & basic needs",
    labelEs: "Beneficios y necesidades básicas",
    categories: ["benefits_dshs", "insurance_navigation"],
  },
  {
    id: "work",
    labelEn: "Work or job training",
    labelEs: "Trabajo o capacitación laboral",
    categories: ["employment", "education"],
  },
  {
    id: "health",
    labelEn: "Medical or dental care",
    labelEs: "Atención médica o dental",
    categories: ["healthcare_medical", "healthcare_dental"],
  },
  {
    id: "safety",
    labelEn: "I don't feel safe at home",
    labelEs: "No me siento seguro/a en casa",
    categories: ["domestic_violence", "legal"],
  },
  {
    id: "kids",
    labelEn: "Help with my kids",
    labelEs: "Ayuda con mis hijos",
    categories: ["childcare", "youth_family"],
  },
  {
    id: "legal",
    labelEn: "Legal help",
    labelEs: "Ayuda legal",
    categories: ["legal", "reentry_justice"],
  },
];

/** Collapse a set of selected need ids into a de-duplicated list of category keys. */
export function needsToCategories(selectedIds: string[]): string[] {
  const keys = new Set<string>();
  for (const option of needOptions) {
    if (selectedIds.includes(option.id)) {
      option.categories.forEach((c) => keys.add(c));
    }
  }
  return Array.from(keys);
}
