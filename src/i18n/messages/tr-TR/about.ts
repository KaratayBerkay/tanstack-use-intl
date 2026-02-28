const about = {
    title: "Hakkında — {{locale}}",
    description: "Bu sayfa TanStack Router ile yerel ayar ön ekli yönlendirmeyi gösterir. Geçerli yerel ayar <0>{{locale}}</0>, ve <1>/{{locale}}/about</1> rotası üzerinden yüklenmiştir.",
    featuresTitle: "✅ Ortak ad alanı anahtarları (useTranslation('common') aracılığıyla)",
    interpolationTitle: "✨ İnterpolasyon Örnekleri",
    basicInterpolation: "Merhaba {{name}}, uygulamamıza hoş geldiniz!",
    dateInterpolation: "Bugünün tarihi {{date, DATE_HUGE}}",
    pluralization_zero: "Yeni mesajınız yok.",
    pluralization_one: "1 yeni mesajınız var.",
    pluralization_other: "{{count}} yeni mesajınız var.",
    currencyInterpolation: "Bakiyeniz {{val, currency}}",
    contextWelcome: "Merhaba {{name}}",
    contextWelcome_male: "Merhaba Bay {{name}}",
    contextWelcome_female: "Merhaba Bayan {{name}}",
} as const;

export default about;
