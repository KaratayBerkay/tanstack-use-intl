import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/$locale/about')({
  component: AboutPage,
})

function AboutPage() {
  const { locale } = Route.useParams()
  const { t } = useTranslation('common')

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link id="about-back-link" to="/$locale" params={{ locale }}
        className="text-sm text-indigo-500 no-underline transition hover:text-indigo-700"
      >← {t('back')}</Link>

      <h1 className="mt-6 mb-3 text-4xl font-bold tracking-tight text-(--sea-ink)">About —{' '}
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-2xl">{locale}</code>
      </h1>

      <p className="text-base leading-relaxed text-gray-500">
        This page demonstrates locale-prefixed routing with TanStack Router. The current locale is <strong>{locale}</strong>, loaded via the <code>/$locale/about</code> route.</p>
      <div className="mt-8 rounded-xl border border-green-300 bg-green-50 p-5">
        <h2 className="mb-2 text-lg font-semibold text-(--sea-ink)">
          ✅ Common namespace keys (via{' '}
          <code>useTranslation('common')</code>)
        </h2>
        <ul className="m-0 list-disc pl-5 leading-loose">
          <li><strong>appName:</strong> {t('appName')}</li>
          <li><strong>loading:</strong> {t('loading')}</li>
          <li><strong>error:</strong> {t('error')}</li>
          <li><strong>save:</strong> {t('save')}</li>
          <li><strong>cancel:</strong> {t('cancel')}</li>
          <li><strong>confirm:</strong> {t('confirm')}</li>
        </ul>
      </div>
      <div className="mt-6 flex gap-4">
        <Link id="about-nav-home" to="/$locale" params={{ locale }} className="text-indigo-500 underline transition hover:text-indigo-700">
          → Home
        </Link>
        <Link id="about-nav-account" to="/$locale/account" params={{ locale }} className="text-indigo-500 underline transition hover:text-indigo-700">
          → Account
        </Link>
      </div>
    </main>
  )
}
