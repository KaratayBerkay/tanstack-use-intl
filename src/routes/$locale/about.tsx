import { createFileRoute, Link } from '@tanstack/react-router'
import { Trans, useTranslation } from 'react-i18next'
import { useState } from 'react'

export const Route = createFileRoute('/$locale/about')({
  component: AboutPage,
})

function AboutPage() {
  const { locale } = Route.useParams()
  // Load both 'about' and 'common' namespaces
  const { t } = useTranslation(['about', 'common'])
  const [messagesCount, setMessagesCount] = useState(1)

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-black">
      <Link id="about-back-link" to="/$locale" params={{ locale }}
        className="mb-6 inline-flex items-center text-sm font-medium text-indigo-500 no-underline transition hover:text-indigo-700"
      >
        ← {t('common:back')}
      </Link>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
        {t('about:title', { locale })}
      </h1>

      <p className="mb-8 text-lg leading-relaxed text-slate-600">
        <Trans
          ns="about"
          i18nKey="description"
          values={{ locale }}
          components={{
            0: <strong className="rounded bg-indigo-100 px-1.5 py-0.5 text-indigo-700 font-semibold" />,
            1: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800" />
          }}
        />
      </p>

      {/* ── Interpolation Examples Section ── */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
        <div className="border-b border-indigo-50 bg-indigo-50/50 px-6 py-4">
          <h2 className="text-xl font-bold text-indigo-900">
            {t('about:interpolationTitle')}
          </h2>
        </div>

        <div className="divide-y divide-slate-100">

          {/* Basic string interpolation */}
          <div className="p-6">
            <h3 className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">Basic Interpolation</h3>
            <p className="text-slate-800 text-lg">
              {t('about:basicInterpolation', { name: 'Berkay' })}
            </p>
          </div>

          {/* Pluralization */}
          <div className="p-6">
            <h3 className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">Plurals</h3>
            <div className="flex items-center gap-4 mb-3">
              <button
                onClick={() => setMessagesCount(Math.max(0, messagesCount - 1))}
                className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center hover:bg-slate-200 transition"
              >-</button>
              <span className="font-mono text-slate-600 w-4 text-center">{messagesCount}</span>
              <button
                onClick={() => setMessagesCount(messagesCount + 1)}
                className="rounded-full bg-slate-100 w-8 h-8 flex items-center justify-center hover:bg-slate-200 transition"
              >+</button>
            </div>
            <p className="text-slate-800 text-lg font-medium">
              {t('about:pluralization', { count: messagesCount })}
            </p>
          </div>

          {/* Context (Mr / Mrs) */}
          <div className="p-6">
            <h3 className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">Context (Mr/Mrs)</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-slate-500 text-sm mb-1 uppercase tracking-wide font-medium">Male Context</p>
                <p className="text-slate-800 text-lg font-medium">
                  {t('about:contextWelcome', { context: 'male', name: 'Berkay' })}
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1 uppercase tracking-wide font-medium">Female Context</p>
                <p className="text-slate-800 text-lg font-medium">
                  {t('about:contextWelcome', { context: 'female', name: 'Ada' })}
                </p>
              </div>
            </div>
          </div>

          {/* Formatting (Date & Currency) */}
          <div className="p-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">Formatting (Date)</h3>
              <p className="text-slate-800 font-medium">
                {t('about:dateInterpolation', { date: new Date() })}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">Formatting (Currency)</h3>
              <p className="font-medium text-emerald-600">
                {t('about:currencyInterpolation', { val: 1250000 })}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Common namespace fallback section ── */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="mb-4 text-lg font-bold text-emerald-900">
          {t('about:featuresTitle')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {['appName', 'loading', 'error', 'save', 'cancel', 'confirm'].map((key) => (
            <div key={key} className="flex flex-col bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
              <span className="text-xs font-mono text-emerald-600 mb-1">{key}</span>
              <span className="font-medium text-slate-700">{t(`common:${key}` as any)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-6 border-t border-slate-100 pt-8">
        <Link id="about-nav-home" to="/$locale" params={{ locale }} className="inline-flex items-center text-indigo-500 font-medium transition hover:text-indigo-700">
          → Home
        </Link>
        <Link id="about-nav-account" to="/$locale/account" params={{ locale }} className="inline-flex items-center text-indigo-500 font-medium transition hover:text-indigo-700">
          → Account
        </Link>
      </div>
    </main>
  )
}
