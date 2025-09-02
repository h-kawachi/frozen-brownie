import type { Config } from '@react-router/dev/config'

export default {
  // サーバーサイドレンダリング
  ssr: true,

  // 実験的機能の有効化
  future: {
    unstable_middleware: true,
  },
} satisfies Config
