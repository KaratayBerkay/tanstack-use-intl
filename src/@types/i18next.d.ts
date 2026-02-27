// Augments the i18next module so that useTranslation() and t() are fully
// type-safe — keys are validated at compile time, return types are inferred.
// Doc: https://www.i18next.com/overview/typescript

import type { resources } from "../i18n/index";

declare module "i18next" {
    interface CustomTypeOptions {
        // Default namespace used when useTranslation() is called without an argument
        defaultNS: "common";

        // Full namespace map derived from the English resource files.
        // Every key in every namespace is checked by TypeScript.
        resources: (typeof resources)["en"];
    }
}
