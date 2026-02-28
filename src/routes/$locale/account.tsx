import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/$locale/account')({
  component: AccountPage,
})

function AccountPage() {
  const { locale } = Route.useParams(); const { t: tc } = useTranslation('common'); const { t } = useTranslation('account')
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        id="account-back-link" to="/$locale" params={{ locale }}
        className="text-sm text-indigo-500 no-underline transition hover:text-indigo-700"
      >← {tc('back')}</Link>
      <h1 className="mt-6 mb-6 text-4xl font-bold tracking-tight text-(--sea-ink)">{t('settings.title')}</h1>
      <ProfileSection />
      <SettingsSection locale={locale} />
      <DangerZoneSection />
      <AuthFooter locale={locale} />
    </main>
  )
}

function ProfileSection() {
  const { t } = useTranslation('account', { keyPrefix: 'profile' })
  return (
    <section className="mb-5 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold text-(--sea-ink)">{t('title')}</h2>
      <div className="grid gap-3">
        <Field label={t('name')} value="Ada Lovelace" id="field-name" />
        <Field label={t('email')} value="ada@example.com" id="field-email" />
        <Field label={t('avatar')} value="avatar.png" id="field-avatar" />
      </div>
    </section>
  )
}

function SettingsSection({ locale }: { locale: string }) {
  const { t } = useTranslation('account')
  const dropdownOptions = t('settings.dropdownOptions', { returnObjects: true })
  return (
    <section className="mb-5 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold text-(--sea-ink)">{t('settings.title')}</h2>
      <div className="grid gap-4">
        <Field label={t('settings.language')} value={locale} id="field-language" />
        <Field label={t('settings.theme')} value="Dark" id="field-theme" />
        <Field label={t('settings.notifications')} value="On" id="field-notifications" />
        <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
          <label htmlFor="visibility" className="w-28 shrink-0 text-sm font-medium text-gray-700">Account Type</label>
          <select id="visibility" defaultValue="public"
            className="flex-1 rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm text-(--sea-ink) outline-none"
          >{dropdownOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </div>
      </div>
    </section>
  )
}

function DangerZoneSection() {
  const { t } = useTranslation('account')
  return (
    <section className="mb-5 rounded-xl border border-red-300 bg-red-50 p-6">
      <h2 className="mb-2 text-lg font-semibold text-red-600">{t('settings.dangerZone.title')}</h2>
      <p className="mb-4 text-sm text-gray-500">{t('settings.dangerZone.deleteWarning')}</p>
      <div className="flex gap-3">
        <button id="delete-account-btn"
          className="cursor-pointer rounded-md border-none bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >{t('settings.dangerZone.deleteAccount')}</button>
        <button id="logout-btn"
          className="cursor-pointer rounded-md border border-gray-300 bg-transparent px-5 py-2 text-sm font-medium text-(--sea-ink) transition hover:border-gray-400"
        >{t('auth.logout')}</button>
      </div>
    </section>
  )
}

function AuthFooter({ locale }: { locale: string }) {
  const { t } = useTranslation('account')
  return (
    <>
      <p className="text-sm text-gray-500">
        <a href="#" id="forgot-password-link" className="text-indigo-500 transition hover:text-indigo-700">
          {t('auth.forgotPassword')}</a></p>
      <div className="mt-6 flex gap-4">
        <Link id="account-nav-home" to="/$locale" params={{ locale }} className="text-indigo-500 underline transition hover:text-indigo-700">
          → Home
        </Link>
        <Link id="account-nav-about" to="/$locale/about" params={{ locale }} className="text-indigo-500 underline transition hover:text-indigo-700">
          → About
        </Link>
      </div>
    </>
  )
}

function Field({ label, value, id }: { label: string; value: string; id: string }) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="w-28 shrink-0 text-sm font-medium text-gray-700">{label}</label>
      <input id={id} readOnly value={value}
        className="flex-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-(--sea-ink) outline-none"
      />
    </div>
  )
}
