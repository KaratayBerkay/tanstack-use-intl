// translation.ts
// Utility types that derive the shape of each namespace from the English
// source-of-truth, then enforce that every locale implements the same shape.
//
// Usage in a message file:
//   import type { NSTranslation } from "../translation";
//   const home = { ... } satisfies NSTranslation<"home">;
//   export default home;

import type { resources } from "./index";

type EnResources = (typeof resources)["en-US"];

/** Extract the type of a single namespace from the English resources. */
export type NSTranslation<NS extends keyof EnResources> = EnResources[NS];

// Re-export UI-facing constants so consumers can import from one place
export { LOCALE_LABELS, type Namespace } from "./constants";

// Full resource type — every locale must satisfy this shape.
export type Resources = {
    [L in keyof typeof resources]: {
        [NS in keyof EnResources]: NSTranslation<NS>;
    };
};
