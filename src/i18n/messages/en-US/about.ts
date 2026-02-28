const about = {
    title: "About — {{locale}}",
    description: "This page demonstrates locale-prefixed routing with TanStack Router. The current locale is <0>{{locale}}</0>, loaded via the <1>/{{locale}}/about</1> route.",
    featuresTitle: "✅ Common namespace keys (via useTranslation('common'))",
    interpolationTitle: "✨ Interpolation Examples",
    basicInterpolation: "Hello {{name}}, welcome to our app!",
    dateInterpolation: "Today's date is {{date, DATE_HUGE}}",
    pluralization_zero: "You have no new messages.",
    pluralization_one: "You have 1 new message.",
    pluralization_other: "You have {{count}} new messages.",
    currencyInterpolation: "Your balance is {{val, currency}}",
    contextWelcome: "Hello {{name}}",
    contextWelcome_male: "Hello Mr. {{name}}",
    contextWelcome_female: "Hello Mrs. {{name}}",
} as const;

export default about;
