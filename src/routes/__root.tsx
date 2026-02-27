import { HeadContent, Scripts, createRootRoute, redirect } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import appCss from '../styles.css?url'
import { initI18n } from '../i18n/index'
import { resolveLocale } from '../i18n/locale'

export const Route = createRootRoute({
  async beforeLoad({ location }) {
    const locale = resolveLocale(); await initI18n(locale)
    if (location.pathname === '/') { throw redirect({ to: '/$locale', params: { locale } }) }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TanStack Start Starter' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased overflow-wrap:anywhere selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
