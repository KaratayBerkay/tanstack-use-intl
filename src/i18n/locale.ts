import { i18next } from "./index";
import {
    SUPPORTED_LOCALES,
    LANG_TO_LOCALE,
    DEFAULT_LOCALE,
    LOCALE_COOKIE,
    type Locale,
} from "./constants";

// ── Type guard ────────────────────────────────────────────────────────────────

export function isLocale(value: unknown): value is Locale {
    return SUPPORTED_LOCALES.includes(value as Locale);
}

// ── Detection ─────────────────────────────────────────────────────────────────

/** Read locale from a cookie (works on both server and client). */
export function getLocaleFromCookie(cookieHeader?: string): Locale | null {
    const source = cookieHeader ?? (typeof document !== "undefined" ? document.cookie : "");
    const match = source.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]+)`));
    const value = match?.[1];
    return isLocale(value) ? value : null;
}

/** Read locale from browser navigator.language. */
export function getLocaleFromBrowser(): Locale {
    if (typeof navigator === "undefined") return DEFAULT_LOCALE;
    const full = navigator.language;
    if (isLocale(full)) return full;
    const short = full.split("-")[0];
    return LANG_TO_LOCALE[short] ?? DEFAULT_LOCALE;
}

/**
 * Resolve the locale to use, in priority order:
 *   1. Explicit override (must be a supported BCP 47 tag)
 *   2. Cookie
 *   3. Browser navigator.language
 *   4. DEFAULT_LOCALE fallback
 */
export function resolveLocale(override?: string | null, cookieHeader?: string): Locale {
    if (override && isLocale(override)) return override;
    return getLocaleFromCookie(cookieHeader) ?? getLocaleFromBrowser();
}

// ── Persistence ───────────────────────────────────────────────────────────────

export function persistLocale(locale: Locale): void {
    if (typeof document === "undefined") return;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

// ── Runtime switching ─────────────────────────────────────────────────────────

export async function changeLocale(locale: Locale): Promise<void> {
    await i18next.changeLanguage(locale);
    persistLocale(locale);
}

export function getCurrentLocale(): Locale {
    const lang = i18next.language;
    return isLocale(lang) ? lang : DEFAULT_LOCALE;
}
