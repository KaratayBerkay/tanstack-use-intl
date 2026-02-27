import { Outlet, createFileRoute } from '@tanstack/react-router'
import { initI18n } from '@/i18n'
import { persistLocale, isLocale } from '@/i18n/locale'

export const Route = createFileRoute('/$locale/_locale')({
  // This fires on EVERY navigation that involves a /$locale URL —
  // including client-side locale switches. Reading from params.locale
  // (the URL) is the only reliable source of truth; cookie/browser detection
  // in __root.tsx can't see the intended locale after a switch.
  async beforeLoad({ params }) {
    const locale = params.locale
    if (isLocale(locale)) {
      await initI18n(locale)   // switches i18next language
      persistLocale(locale)    // keeps cookie in sync for next visit
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  return <Outlet />
}
