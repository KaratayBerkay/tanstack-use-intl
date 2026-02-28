export const SUPPORTED_LOCALES = ["en-US", "en-GB", "tr-TR"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en-US";
export const LANG_TO_LOCALE: Record<string, Locale> = {
    en: "en-US", tr: "tr-TR",
};
export const LOCALE_COOKIE = "locale";
export const LOCALE_LABELS: Record<Locale, string> = {
    "en-US": "🇺🇸 EN", "en-GB": "🇬🇧 EN (UK)", "tr-TR": "🇹🇷 TR",
};
export const NAMESPACES = ["common", "home", "account", "about"] as const;
export type Namespace = (typeof NAMESPACES)[number];
export const DEFAULT_NS: Namespace = "common";
