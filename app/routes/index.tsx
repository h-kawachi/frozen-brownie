export default function Index() {
  return (
    <main className="max-w-[600px] m-auto px-1 py-3">
      <h1 className="leading-none  mb-3">
        <img src="/img/logo-frozenbrownie.svg" alt="Frozen Brownie" className="w-3/4 lg:w-1/2 h-auto mx-auto" />
      </h1>

      <section className="bg-body-50 p-1.5 rounded-xl mb-2">
        <h2 className="text-2xl font-normal mb-1.5">案件実績</h2>

        <ul>
          <li className="mb-0.75">福利厚生システム　バックオフィス（UIデザイン, フロントエンド）</li>
          <li className="mb-0.75">社内教育システム　Webアプリ化・プッシュ通知対応（フロントエンド, バックエンド）</li>
          <li className="mb-0.75">ふるさと納税サービス　寄付決済画面・バックオフィス（UIデザイン, フロントエンド）</li>
          <li className="mb-0.75">
            インスタントウィン・アンケートキャンペーンシステム　ユーザ画面・バックオフィス（UIデザイン, フロントエンド）
          </li>
          <li className="mb-0.75">医療関連サービス　受発注・検体管理画面（フロントエンド）</li>
          <li className="mb-0.75">採用・人事労災・福利厚生ツール（フロントエンド）</li>
          <li className="mb-0.75">出版社公式Webコミック配信サービス （UIデザイン, フロントエンド, バックエンド）</li>
          <li className="mb-0.75">出版社公式書籍紹介サイト （UIデザイン, フロントエンド, バックエンド）</li>
          <li className="mb-0.75">
            メッセージアプリ・SNSアプリ・クラウドストレージアプリのWebブラウザ版 （アプリデザイン, ロゴデザイン,
            フロントエンド）
          </li>
          <li>ECサイト　購入画面・バックオフィス（LPデザイン, UIデザイン, フロントエンド）</li>
        </ul>
      </section>

      <section className="bg-body-50 p-1.5 rounded-xl">
        <h2 className="text-2xl font-normal mb-1.5">ポートフォリオ</h2>

        <ul>
          <li className="mb-0.75">
            <a href="https://browniestrap-next.vercel.app/" target="_blank" className="text-primary-700">
              自作UIコンポーネントライブラリ (React)
            </a>
          </li>
          <li className="mb-0.75">
            <a href="https://browniestrap-nuxt4.vercel.app/" target="_blank" className="text-primary-700">
              自作UIコンポーネントライブラリ (Vue)
            </a>
          </li>
          <li>
            <a href="https://github.com/h-kawachi/frozen-brownie" target="_blank" className="text-primary-700">
              このページのgithub
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
