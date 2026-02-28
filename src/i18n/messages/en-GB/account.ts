const account = {
    profile: {
        title: "Profile",
        name: "Name",
        email: "Email",
        avatar: "Avatar",
    },
    settings: {
        title: "Account Settings",
        language: "Language",
        theme: "Theme",
        notifications: "Notifications",
        dropdownOptions: [
            { label: "Public Profile", value: "public" },
            { label: "Private Account", value: "private" },
            { label: "Friends Only", value: "friends" },
        ],
        dangerZone: {
            title: "Danger Zone",
            deleteAccount: "Delete Account",
            deleteWarning: "This action cannot be undone.",
        },
    },
    auth: {
        login: "Log In",
        logout: "Log Out",
        signup: "Sign Up",
        forgotPassword: "Forgot your password?",
    },
} as const;

export default account;
