[![Netlify Status](https://api.netlify.com/api/v1/badges/6d9ef494-a24b-46a2-882b-4440976ade37/deploy-status)](https://app.netlify.com/sites/modest-payne-215883/deploys)
[![Dependency Status](https://img.shields.io/david/7ma7X/mywebsite.svg?style=flat)](https://img.shields.io/david/7ma7X/mywebsite.svg?style=flat)

#### 2019/02/05

リッチなページ遷移をやってみる  
Next.js ではページの初期化方法をカスタマイズする際に _app.js を設定しておくことで自由に変更できる  
ページ遷移自体は [next-page-transitions](https://github.com/illinois/next-page-transitions) という Next 向けの便利なモジュールがあったのでそれをデフォルトに近い感じで使う。もし仮にオリジナルのローディング画面を作成したい場合にも、`PageTransition` の中の `loadingComponent` というpropsに自分が作成したローディングの Component を指定してあげればそれがローディング画面になる、ということで便利

#### 2019/02/04

デプロイ状況を示すバッジをREADMEに置いた

#### 2019/01/25

keybase.ioから生成される公開鍵を置く。結局デフォルトの pathMap を使うのをやめて、自分で next.config.js を書いた。Next のバージョンを安定版 7 に戻す。

#### 2019/01/18

Next.js 使ってみた, Next.jsの不安定バージョンを使わないと 404.html をルート直下に吐かないという問題がある。時期を改めて安定版が登場したら package.json を更新したい。