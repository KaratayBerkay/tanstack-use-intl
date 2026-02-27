import { useNavigate, useParams, useRouterState } from '@tanstack/react-router'
import { SUPPORTED_LOCALES, type Locale } from '@/i18n'
import { persistLocale } from '@/i18n/locale'
import { LOCALE_LABELS } from '@/i18n/translation'

export default function LocaleSwitcher() {
    const { locale } = useParams({ strict: false })
    const navigate = useNavigate()
    const location = useRouterState({ select: (s) => s.location })

    if (!locale) return null

    function handleSwitch(next: Locale) {
        if (next === locale) return

        // Preserve sub-path and search params across the locale switch.
        // e.g. /en-US/account?tab=security → /tr-TR/account?tab=security
        const rest = location.pathname.replace(/^\/[^/]+/, '') // "/account" or ""
        const search = location.searchStr ?? ''

        // Persist NOW so __root.tsx's resolveLocale() sees it on next hard load.
        // The actual i18next language switch happens in _locale.tsx's beforeLoad,
        // which fires automatically because the URL changes.
        persistLocale(next)
        navigate({ to: `/${next}${rest}${search}`, replace: false })
    }

    return (
        <nav
            id="header-locale-switcher"
            aria-label="Language selector"
            className="flex items-center gap-1.5"
        >
            <span className="text-xs text-(--sea-ink-soft)">🌐</span>
            {SUPPORTED_LOCALES.map((loc) => (
                <button
                    key={loc}
                    id={`header-locale-${loc}`}
                    type="button"
                    onClick={() => handleSwitch(loc)}
                    className={[
                        'cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap',
                        'transition-all duration-200 no-underline',
                        loc === locale
                            ? 'border-(--lagoon-deep) bg-(--lagoon-deep) text-white shadow-sm'
                            : 'border-(--line) bg-transparent text-(--sea-ink) hover:border-(--lagoon-deep) hover:text-(--lagoon-deep)',
                    ].join(' ')}
                >
                    {LOCALE_LABELS[loc]}
                </button>
            ))}
        </nav>
    )
}
