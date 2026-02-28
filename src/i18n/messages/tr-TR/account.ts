const account = {
    profile: {
        title: "Profil",
        name: "Ad",
        email: "E-posta",
        avatar: "Avatar",
    },
    settings: {
        title: "Hesap Ayarları",
        language: "Dil",
        theme: "Tema",
        notifications: "Bildirimler",
        dropdownOptions: [
            { label: "Herkese Açık Profil", value: "public" },
            { label: "Gizli Hesap", value: "private" },
            { label: "Sadece Arkadaşlar", value: "friends" },
        ],
        dangerZone: {
            title: "Tehlikeli Bölge",
            deleteAccount: "Hesabı Sil",
            deleteWarning: "Bu işlem geri alınamaz.",
        },
    },
    auth: {
        login: "Giriş Yap",
        logout: "Çıkış Yap",
        signup: "Kayıt Ol",
        forgotPassword: "Şifremi unuttum?",
    },
} as const;

export default account;
