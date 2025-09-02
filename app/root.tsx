import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router'
import type { Route as PageRoute } from './+types/root'
import './app.css'
import { nonceContext } from '~/context'
import { randomBytes } from 'crypto'
import { ViewportController } from '~/components/layout/ViewportController'

// ***************************************************************************
// サーバーサイドの処理
// ***************************************************************************
// CSP用nonceの生成
const nonce = randomBytes(16).toString('base64')

// レスポンスヘッダーの設定
export function headers(_: PageRoute.HeadersArgs) {
  return {
    'Content-Security-Policy': `base-uri 'none'; font-src 'self'; form-action 'self'; frame-ancestors 'self'; img-src 'self' data: https:; object-src 'none'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; script-src 'self' https: 'strict-dynamic' 'nonce-${nonce}'; upgrade-insecure-requests; connect-src 'self' https:; frame-src 'self' https:; media-src 'self'; manifest-src 'self'; worker-src 'self'`,
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'max-age=3600, s-maxage=86400',
  }
}

// nonceの共有
export async function loader({ context }: PageRoute.LoaderArgs) {
  context.set(nonceContext, nonce)
  return { nonce }
}

// ***************************************************************************
// App
// ***************************************************************************
export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData() as { nonce: string } | undefined

  return (
    <html lang="en">
      <head>
        <title>Frozen Brownie</title>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <Meta />
        <link rel="icon" href="/favicon.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.webp" sizes="192x192" />
        <Links />
      </head>

      <body>
        {children}
        <ScrollRestoration nonce={data?.nonce} />
        <Scripts nonce={data?.nonce} />
        <ViewportController />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// ***************************************************************************
// 汎用エラー画面
// ***************************************************************************
export function ErrorBoundary({ error }: PageRoute.ErrorBoundaryProps) {
  let statusCode: number | null = null
  let message: string = 'システムエラーが発生しました'

  if (isRouteErrorResponse(error)) {
    statusCode = error.status || null
    message = error.statusText || 'システムエラーが発生しました'
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      {statusCode && <h1 className="text-2xl">{statusCode}</h1>}
      <p>{message}</p>
    </main>
  )
}
