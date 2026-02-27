const home = {
    hero: {
        title: "Welcome to My TanStack App",
        subtitle: "A fully type-safe, internationalized application",
        cta: "Get Started",
    },
    features: {
        title: "Features",
        typeSafe: {
            title: "Type-Safe i18n",
            description: "Every translation key is checked by TypeScript at compile time.",
        },
        multiLanguage: {
            title: "Multi-Language",
            description: "Seamlessly switch between English and Turkish.",
        },
    },
} as const;

export default home;
