import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router'
import type { Route as PageRoute } from './+types/root'
import './app.css'
import { ViewportController } from '~/components/layout/ViewportController'

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
