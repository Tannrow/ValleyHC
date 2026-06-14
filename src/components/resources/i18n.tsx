"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "vhcs-resources-lang";

/**
 * UI string dictionary scoped to the /resources section only. The rest of the
 * site has no i18n — this is a self-contained EN/ES toggle. Org names/phones
 * stay as-is; org descriptions remain EN for v1 (tracked as a follow-up).
 * Category labels come from resourceCategories (label / labelEs).
 */
const en = {
  // Hero
  heroEyebrow: "Yakima County",
  heroTitle: "Find local help, fast.",
  heroDescription:
    "Free, private. Mental health, substance use, housing, food, and more — plus request an appointment with Valley Health & Counseling.",
  heroFindHelp: "Find help now",
  heroRequest: "Request an appointment",
  heroAsideTitle: "What you'll find here",
  heroAsideStat: "144 local organizations",
  heroAsideBody:
    "A free directory of trusted Yakima County services. No login, no cost — built for the people who help others find their way.",
  langToggleLabel: "Language",
  langEnglish: "English",
  langSpanish: "Español",

  // Crisis banner
  crisisEyebrow: "In crisis? Help is available right now",
  crisisTitle: "You are not alone, and help is free.",
  crisisBody: "If you or someone you're with is in danger, call 911. For mental health or suicide support any time:",
  crisisCall988: "Call 988",
  crisisText988: "Text 988",
  crisisCall911: "Call 911 (emergency)",
  crisisLifeline: "Suicide & Crisis Lifeline",
  crisisDvLine: "Domestic violence crisis line",
  crisisAvailable: "Free and confidential, 24/7.",

  // Needs finder
  needsEyebrow: "Not sure where to start?",
  needsTitle: "What's going on right now?",
  needsDescription:
    "Pick anything that fits. We'll show you the local organizations that can help. You can choose more than one.",
  needsShow: "Show my matches",
  needsClear: "Clear",
  needsSelectHint: "Select what you need, then see your matches below.",

  // Directory
  dirEyebrow: "The full directory",
  dirTitle: "Browse local resources",
  dirDescription:
    "Search by name or filter by what you need. Every listing is a real Yakima County organization — call them directly or open their site.",
  searchLabel: "Search resources",
  searchPlaceholder: "Search by name, service, or city…",
  filterAll: "All resources",
  resultsOne: "1 organization",
  resultsMany: "{n} organizations",
  resultsNone: "No matches found",
  resultsNoneHelp: "Try a different word or clear your filters to see everything.",
  clearFilters: "Clear filters",
  showingFor: "Showing results for",
  callLabel: "Call",
  websiteLabel: "Visit website",
  mapsLabel: "Open in Maps",
  hoursLabel: "Hours",
  loadMore: "Show more",
  showingCount: "Showing {shown} of {total}",
  verifyNote: "Details may change — please confirm before relying on them.",

  // Appointment form
  apptEyebrow: "Valley Health & Counseling",
  apptTitle: "Request an appointment",
  apptDescription:
    "Tell us a little about what you need and we'll reach out. This goes to our team — please keep it general and don't include sensitive medical details.",
  apptName: "Full name",
  apptNamePlaceholder: "Your name",
  apptPhone: "Phone",
  apptPhonePlaceholder: "(509) 555-0148",
  apptEmail: "Email",
  apptEmailPlaceholder: "you@example.com",
  apptMessage: "What are you looking for help with?",
  apptMessageDesc: "Tell us what you need and the best times to reach you. Keep it general — no medical details.",
  apptMessagePlaceholder: "What are you looking for help with? Best times to reach you?",
  apptMessageTooLong: "Please shorten your message to 560 characters or fewer.",
  apptMessageCounter: "{n}/560",
  apptSubmit: "Send request",
  apptSubmitting: "Sending…",
  apptSuccess: "Thank you — your request was sent. Our team will reach out soon. If this is urgent, please call (509) 452-1000.",
  apptError: "We couldn't send your request right now. Please call the clinic at (509) 452-1000.",
  apptPrivacy: "Private and secure. Please don't include sensitive personal or medical information in this form.",
  apptCallInstead: "Prefer to call?",
  apptCallNumber: "(509) 452-1000",

  // Final CTA
  ctaTitle: "You don't have to figure this out alone.",
  ctaDescription:
    "Call Valley Health & Counseling or request an appointment online to get clear next steps from a team that's here to help.",
  ctaPrimary: "Request an appointment",
  ctaSecondary: "Call (509) 452-1000",
} as const;

/** All UI string keys, with widened `string` values so both languages share a shape. */
export type Dict = Record<keyof typeof en, string>;

const es: Dict = {
  heroEyebrow: "Condado de Yakima",
  heroTitle: "Encuentra ayuda local, rápido.",
  heroDescription:
    "Gratis y privado. Salud mental, uso de sustancias, vivienda, comida y más — además, solicita una cita con Valley Health & Counseling.",
  heroFindHelp: "Buscar ayuda ahora",
  heroRequest: "Solicitar una cita",
  heroAsideTitle: "Lo que encontrarás aquí",
  heroAsideStat: "144 organizaciones locales",
  heroAsideBody:
    "Un directorio gratuito de servicios confiables del condado de Yakima. Sin registro, sin costo — hecho para quienes ayudan a otros a encontrar el camino.",
  langToggleLabel: "Idioma",
  langEnglish: "English",
  langSpanish: "Español",

  crisisEyebrow: "¿En crisis? Hay ayuda disponible ahora mismo",
  crisisTitle: "No estás solo, y la ayuda es gratuita.",
  crisisBody: "Si tú o alguien contigo está en peligro, llama al 911. Para apoyo de salud mental o suicidio a cualquier hora:",
  crisisCall988: "Llama al 988",
  crisisText988: "Envía un texto al 988",
  crisisCall911: "Llama al 911 (emergencia)",
  crisisLifeline: "Línea de prevención del suicidio y crisis",
  crisisDvLine: "Línea de crisis por violencia doméstica",
  crisisAvailable: "Gratis y confidencial, 24/7.",

  needsEyebrow: "¿No sabes por dónde empezar?",
  needsTitle: "¿Qué está pasando ahora mismo?",
  needsDescription:
    "Elige lo que aplique. Te mostraremos las organizaciones locales que pueden ayudar. Puedes elegir más de una.",
  needsShow: "Ver mis resultados",
  needsClear: "Borrar",
  needsSelectHint: "Selecciona lo que necesitas y mira tus resultados abajo.",

  dirEyebrow: "El directorio completo",
  dirTitle: "Explora recursos locales",
  dirDescription:
    "Busca por nombre o filtra por lo que necesitas. Cada entrada es una organización real del condado de Yakima — llámalas directamente o visita su sitio.",
  searchLabel: "Buscar recursos",
  searchPlaceholder: "Busca por nombre, servicio o ciudad…",
  filterAll: "Todos los recursos",
  resultsOne: "1 organización",
  resultsMany: "{n} organizaciones",
  resultsNone: "No se encontraron resultados",
  resultsNoneHelp: "Prueba con otra palabra o borra los filtros para ver todo.",
  clearFilters: "Borrar filtros",
  showingFor: "Mostrando resultados para",
  callLabel: "Llamar",
  websiteLabel: "Visitar sitio web",
  mapsLabel: "Abrir en Mapas",
  hoursLabel: "Horario",
  loadMore: "Mostrar más",
  showingCount: "Mostrando {shown} de {total}",
  verifyNote: "Los detalles pueden cambiar — por favor confírmalos antes de depender de ellos.",

  apptEyebrow: "Valley Health & Counseling",
  apptTitle: "Solicitar una cita",
  apptDescription:
    "Cuéntanos un poco sobre lo que necesitas y nos comunicaremos contigo. Esto llega a nuestro equipo — por favor, mantenlo general y no incluyas detalles médicos sensibles.",
  apptName: "Nombre completo",
  apptNamePlaceholder: "Tu nombre",
  apptPhone: "Teléfono",
  apptPhonePlaceholder: "(509) 555-0148",
  apptEmail: "Correo electrónico",
  apptEmailPlaceholder: "tu@ejemplo.com",
  apptMessage: "¿En qué necesitas ayuda?",
  apptMessageDesc: "Dinos qué necesitas y las mejores horas para contactarte. Mantenlo general — sin detalles médicos.",
  apptMessagePlaceholder: "¿En qué necesitas ayuda? ¿Las mejores horas para contactarte?",
  apptMessageTooLong: "Por favor acorta tu mensaje a 560 caracteres o menos.",
  apptMessageCounter: "{n}/560",
  apptSubmit: "Enviar solicitud",
  apptSubmitting: "Enviando…",
  apptSuccess: "Gracias — tu solicitud fue enviada. Nuestro equipo se comunicará pronto. Si es urgente, llama al (509) 452-1000.",
  apptError: "No pudimos enviar tu solicitud en este momento. Por favor llama a la clínica al (509) 452-1000.",
  apptPrivacy: "Privado y seguro. Por favor no incluyas información personal o médica sensible en este formulario.",
  apptCallInstead: "¿Prefieres llamar?",
  apptCallNumber: "(509) 452-1000",

  ctaTitle: "No tienes que resolver esto solo.",
  ctaDescription:
    "Llama a Valley Health & Counseling o solicita una cita en línea para obtener pasos claros de un equipo que está aquí para ayudarte.",
  ctaPrimary: "Solicitar una cita",
  ctaSecondary: "Llama al (509) 452-1000",
};

export const dict: Record<Lang, Dict> = { en, es };

type ResourceLangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const ResourceLangContext = createContext<ResourceLangContextValue | null>(null);

export function ResourceLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate from localStorage after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") {
        setLangState(stored);
      }
    } catch {
      // localStorage unavailable — keep default.
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore persistence failures
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "es" : "en");
  }, [lang, setLang]);

  const value = useMemo<ResourceLangContextValue>(
    () => ({ lang, setLang, toggleLang, t: dict[lang] }),
    [lang, setLang, toggleLang],
  );

  return <ResourceLangContext.Provider value={value}>{children}</ResourceLangContext.Provider>;
}

export function useResourceLang(): ResourceLangContextValue {
  const ctx = useContext(ResourceLangContext);
  if (!ctx) {
    throw new Error("useResourceLang must be used within a ResourceLangProvider");
  }
  return ctx;
}

/** Interpolate `{key}` tokens in a dict string. */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}
