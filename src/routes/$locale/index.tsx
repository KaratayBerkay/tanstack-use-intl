import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LOCALES, type Locale } from '@/i18n'
import { changeLocale } from '@/i18n/locale'

export const Route = createFileRoute('/$locale/')({
    component: LocaleHomePage,
})

const LOCALE_LABELS: Record<Locale, string> = {
    'en-US': '🇺🇸 English (US)',
    'en-GB': '🇬🇧 English (UK)',
    'tr-TR': '🇹🇷 Türkçe',
}

function LocaleHomePage() {
    const { locale } = Route.useParams()
    const { t } = useTranslation('home')
    const { t: tc } = useTranslation('common')

    return (
        <div className="mx-auto max-w-3xl px-6 py-12">
            {/* Hero */}
            <section className="mb-12">
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-(--sea-ink)">{t('hero.title')}</h1>
                <p className="mb-6 text-lg text-(--sea-ink-soft)">{t('hero.subtitle')}</p>
                <button id="home-cta-btn"
                    className="cursor-pointer rounded-lg border-none bg-(--lagoon-deep) px-6 py-2.5 text-base font-semibold 
                    text-white transition hover:bg-(--lagoon) hover:scale-[1.02]"
                >{t('hero.cta')}
                </button>
            </section>

            {/* Features */}
            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold text-(--sea-ink)">{t('features.title')}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureCard title={t('features.typeSafe.title')} description={t('features.typeSafe.description')} />
                    <FeatureCard title={t('features.multiLanguage.title')} description={t('features.multiLanguage.description')} />
                </div>
            </section>

            {/* Locale switcher */}
            <section>
                <h2 className="mb-3 text-xl font-semibold text-(--sea-ink)"> 🌐 {tc('appName')} — active locale:{' '}
                    <code className="rounded px-1 text-base">{locale}</code>
                </h2>
                <div className="flex flex-wrap gap-3">
                    {SUPPORTED_LOCALES.map((loc) => (
                        <Link
                            key={loc}
                            id={`locale-link-${loc}`}
                            to="/$locale"
                            params={{ locale: loc }}
                            onClick={() => changeLocale(loc)}
                            className={['rounded-md border-2 px-4 py-2 text-sm font-medium no-underline transition',
                                loc === locale ? 'border-(--lagoon-deep) bg-(--lagoon-deep) text-white'
                                    : 'border-(--line) bg-transparent text-(--sea-ink) hover:border-(--lagoon-deep)',
                            ].join(' ')}
                        >{LOCALE_LABELS[loc]}
                        </Link>
                    ))}
                </div>

                {/* Nav to other demo pages */}
                <div className="mt-8 flex gap-4">
                    <Link id="nav-to-about" to="/$locale/about" params={{ locale }} className="text-(--lagoon-deep) underline transition hover:text-(--lagoon)"
                    >→ About page</Link>
                    <Link id="nav-to-account" to="/$locale/account" params={{ locale }} className="text-(--lagoon-deep) underline transition hover:text-(--lagoon)"
                    >→ Account page</Link>
                </div>
            </section>
        </div>
    )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="island-shell feature-card rounded-xl border border-(--line) p-5 transition hover:-translate-y-0.5">
            <h3 className="mb-2 text-base font-semibold text-(--sea-ink)">{title}</h3>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{description}</p>
        </div>
    )
}
