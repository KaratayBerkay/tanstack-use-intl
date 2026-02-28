import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
    SUPPORTED_LOCALES, DEFAULT_LOCALE, DEFAULT_NS, NAMESPACES, LANG_TO_LOCALE, LOCALE_COOKIE, LOCALE_LABELS,
    type Locale, type Namespace
} from "./constants";
import enUSCommon from "./messages/en-US/common";
import enUSHome from "./messages/en-US/home";
import enUSAccount from "./messages/en-US/account";
import enUSAbout from "./messages/en-US/about";
import enGBCommon from "./messages/en-GB/common";
import enGBHome from "./messages/en-GB/home";
import enGBAccount from "./messages/en-GB/account";
import enGBAbout from "./messages/en-GB/about";
import trTRCommon from "./messages/tr-TR/common";
import trTRHome from "./messages/tr-TR/home";
import trTRAccount from "./messages/tr-TR/account";
import trTRAbout from "./messages/tr-TR/about";

export const resources = {
    "en-US": { common: enUSCommon, home: enUSHome, account: enUSAccount, about: enUSAbout },
    "en-GB": { common: enGBCommon, home: enGBHome, account: enGBAccount, about: enGBAbout },
    "tr-TR": { common: trTRCommon, home: trTRHome, account: trTRAccount, about: trTRAbout },
} as const;

const quietLogger = {
    type: "logger" as const, log: () => { },
    warn: (...args: unknown[]) => console.warn(...args), error: (...args: unknown[]) => console.error(...args),
};

i18next.use(quietLogger).use(initReactI18next).init({
    lng: DEFAULT_LOCALE, fallbackLng: DEFAULT_LOCALE, supportedLngs: SUPPORTED_LOCALES as unknown as string[],
    resources: resources as any, ns: NAMESPACES as unknown as string[], defaultNS: DEFAULT_NS,
    react: { useSuspense: false },
    interpolation: {
        escapeValue: false,
        format: (value, format, lng) => {
            if (format === "uppercase") return value.toUpperCase();
            if (value instanceof Date) {
                if (format === "DATE_HUGE") {
                    return new Intl.DateTimeFormat(lng, { dateStyle: "full" }).format(value);
                }
                return new Intl.DateTimeFormat(lng).format(value);
            }
            if (format === "currency" && typeof value === "number") {
                // Adjust currency formatting based on locale (example defaults to USD)
                const currency = lng === 'tr-TR' ? 'TRY' : lng === 'en-GB' ? 'GBP' : 'USD';
                return new Intl.NumberFormat(lng, { style: "currency", currency }).format(value);
            }
            return value;
        }
    },
});

export async function initI18n(locale: Locale, namespaces: string[] = [DEFAULT_NS]) {
    if (i18next.language !== locale) await i18next.changeLanguage(locale);
    await i18next.loadNamespaces(namespaces); return i18next;
}

export { i18next, SUPPORTED_LOCALES, DEFAULT_LOCALE, LANG_TO_LOCALE, NAMESPACES, DEFAULT_NS, LOCALE_COOKIE, LOCALE_LABELS };
export type { Locale, Namespace };