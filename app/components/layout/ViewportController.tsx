'use client'

import { useEffect } from 'react'
import env from '~/lib/env'

export function ViewportController(): null {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const setViewport = () => {
      const viewport = document.querySelector('meta[name=viewport]')
      if (!viewport) return
      viewport.setAttribute('content', env.viewport())
    }

    setViewport()
    window.addEventListener('orientationchange', setViewport)
    env.mediaquery().addEventListener('change', setViewport)

    return () => {
      window.removeEventListener('orientationchange', setViewport)
      env.mediaquery().removeEventListener('change', setViewport)
    }
  }, [])

  return null
}
