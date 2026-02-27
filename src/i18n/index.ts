import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
    SUPPORTED_LOCALES, DEFAULT_LOCALE, DEFAULT_NS, NAMESPACES, LANG_TO_LOCALE, LOCALE_COOKIE, LOCALE_LABELS,
    type Locale, type Namespace
} from "./constants";
import enUSCommon from "./messages/en-US/common";
import enUSHome from "./messages/en-US/home";
import enUSAccount from "./messages/en-US/account";
import enGBCommon from "./messages/en-GB/common";
import enGBHome from "./messages/en-GB/home";
import enGBAccount from "./messages/en-GB/account";
import trTRCommon from "./messages/tr-TR/common";
import trTRHome from "./messages/tr-TR/home";
import trTRAccount from "./messages/tr-TR/account";

export const resources = {
    "en-US": { common: enUSCommon, home: enUSHome, account: enUSAccount },
    "en-GB": { common: enGBCommon, home: enGBHome, account: enGBAccount },
    "tr-TR": { common: trTRCommon, home: trTRHome, account: trTRAccount },
} as const;

const quietLogger = {
    type: "logger" as const, log: () => { },
    warn: (...args: unknown[]) => console.warn(...args), error: (...args: unknown[]) => console.error(...args),
};

i18next.use(quietLogger).use(initReactI18next).init({
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES as unknown as string[],
    resources: resources as any,
    ns: NAMESPACES as unknown as string[],
    defaultNS: DEFAULT_NS,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
});

export async function initI18n(locale: Locale, namespaces: string[] = [DEFAULT_NS]) {
    if (i18next.language !== locale) await i18next.changeLanguage(locale);
    await i18next.loadNamespaces(namespaces); return i18next;
}

export { i18next, SUPPORTED_LOCALES, DEFAULT_LOCALE, LANG_TO_LOCALE, NAMESPACES, DEFAULT_NS, LOCALE_COOKIE, LOCALE_LABELS };
export type { Locale, Namespace };