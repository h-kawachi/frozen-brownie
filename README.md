# Browniestrap: React Router(v7)

## ローカル開発環境

|          |                        |
| -------- | ---------------------- |
| Node.js  | 22.18.0 (LTS)          |
| URL      | http://localhost:3000/ |
| 環境変数 | .envに記述 |

```
APP_ENV=development
SESSION_COOKIE_NAME=bs-session
COOKIE_SECRET=CPT1thj.twc1hvm_pab
```

### 起動手順

1. `npm install` ※初回・node modules更新時のみ
2. `npm run dev`

### Dockerコンテナを作成する場合

1. `docker compose up`

## VSCode推奨設定

### 拡張機能

- JavaScript and TypeScript Nightly
- Tailwind CSS IntelliSense
- Prettier - Code formatter
  - 設定「Editor: Format on Save」を有効
  - 設定「Editor: Default Formatter」でPrettier - Code formatterを選択
