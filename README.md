# Next.js Hello World（中規模）

これは、Next.jsの基本を学ぶための、シンプルな **Next.js Hello World** プロジェクトです。基本的なNext.jsアプリケーションをセットアップし、"Hello World"メッセージを表示する方法を示します。

## 目次
  - [必要条件](#必要条件)
  - [中規模の特徴](#中規模の特徴)
  - [インストール](#インストール)
  - [プロジェクトの実行](#プロジェクトの実行)
  - [プロジェクトの構成](#プロジェクトの構成)
  - [さらに詳しく](#さらに詳しく)

## 必要条件
  - [Node.js](https://nodejs.org/) バージョン14.x以上
  - パッケージマネージャとして [npm](https://www.npmjs.com/) もしくは [yarn](https://yarnpkg.com/)

## 中規模の特徴
  - 10〜20ページ程度のサイトやアプリ
  - APIや外部サービスと連携
  - 多人数（3〜10人）の開発チーム
  - 複数の機能、ページのレイアウトやナビゲーション
  - SEOやパフォーマンスの最適化が重要

## インストール
1. リポジトリをクローンする：
   ```bash
   git clone https://github.com/katsuaki-sasaki/helloworld-nextjs-medium.git
   ```
2. プロジェクト・ディレクトリに移動する：
   ```bash
   cd helloworld-nextjs-medium
   ```
3. 依存関係をインストールします：  
   npmを使用する：
   ```bash
   npm install
   ```
   yarnを使用する:
   ```bash
   yarn
   ```

## プロジェクトの実行
  インストールが完了したら、以下のコマンドで開発モードでプロジェクトを実行できる：

   npmを使用する:
   ```bash
   npm run dev
   ```
  yarnを使用する:
   ```bash
   yarn dev
   ```
   ブラウザを開き、[http://localhost:3000](http://localhost:3000)にアクセスすると、"Hello World"のページが表示される。

## プロジェクトの構成
  このプロジェクトは以下のような構成になっている：
   ```          
    helloworld-nextjs-medium/
    ├── pages/
    │   ├── api/              # APIルート、サーバーサイドでの処理やデータ取得に使用される
    │   │   └── hello.js      # APIのエンドポイント（例: helloを返すだけのシンプルなAPI）
    │   ├── about.js          # 単一ページ（例: Aboutページ）
    │   ├── blog/             # 複数ページを持つサブディレクトリ（例: 各ブログ記事のページ）
    │   │   ├── [slug].js     # 各ブログ記事の動的ルート
    │   │   └── index.js      # ブログ一覧ページ
    │   └── index.js          # ホームページ（Hello Worldメッセージを表示）
    ├── components/           # 共通コンポーネント
    │   ├── Button.js         # ボタンコンポーネント
    │   ├── Header.js         # ヘッダーコンポーネント
    │   └── SEO.js            # SEOのメタタグを管理するコンポーネント
    ├── public/               # 静的アセット（画像、フォントなど）
    ├── styles/
    │   ├── global.css        # グローバルスタイル
    │   └── components/       # コンポーネントごとのスタイル
    │       └── Button.module.css    # ボタンコンポーネント専用のスタイル
    ├── lib/                  # APIやデータベース接続のロジック
    ├── hooks/                # カスタムフック
    ├── utils/                # ユーティリティ関数
    ├── next.config.js        # Next.js設定ファイル
    ├── .env.local            # 環境変数
    ├── package.json          # 依存関係
    └── README.md             # プロジェクト文書
   ```

### 重要なファイル
  - `pages/index.js`: Hello World メッセージとSEO、画像最適化が行われているメインファイル。
  - `components/SEO.js`: ページのSEO対策を行うための共通コンポーネント。
  - `styles/globals.css`: グローバルスタイルを管理。
  - `public/images/`: 画像ファイルを格納するフォルダ。`next/image` で画像最適化が行われます。

## さらに詳しく
  Next.jsの詳細については、以下のリソースをご覧ください：
  - [Next.js Documentation](https://nextjs.org/docs) - Next.js公式ドキュメント
  - [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.js学習コース

```shell
npm install styled-components
npm install --save-dev babel-plugin-styled-components
```