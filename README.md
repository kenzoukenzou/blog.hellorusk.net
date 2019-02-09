[![Netlify Status](https://api.netlify.com/api/v1/badges/6d9ef494-a24b-46a2-882b-4440976ade37/deploy-status)](https://app.netlify.com/sites/modest-payne-215883/deploys)
[![Dependency Status](https://img.shields.io/david/7ma7X/mywebsite.svg?style=flat)](https://img.shields.io/david/7ma7X/mywebsite.svg?style=flat)

#### 2019/02/09

Next のドキュメントを読むと、Link には画面の一番上へとスクロールするのを防ぐプロパティが備わっていることに気が付いたので、モンキーパッチをやめる

#### 2019/02/05

リッチなページ遷移をやってみる  
Next.js ではページの初期化方法をカスタマイズする際に _app.js を設定しておくことで自由に変更できる  
ページ遷移自体は [next-page-transitions](https://github.com/illinois/next-page-transitions) という Next 向けの便利なモジュールがあったのでそれをデフォルトに近い感じで使う。もし仮にオリジナルのローディング画面を作成したい場合にも、`PageTransition` の中の `loadingComponent` というpropsに自分が作成したローディングの Component を指定してあげればそれがローディング画面になる、ということで便利  
  
実際に使ってみると、遷移の際に消える画面が画面の一番上へとスクロールされてしまうのが困った（Next の Link 自体の挙動の問題らしい）。  
ところが next-page-transitions ではその問題をなんと `monkeyPatchScrolling` というプロパティを渡すだけで解決している。  
READMEによると、

> **monkeyPatchScrolling**: By default, Next's `Link` component will scroll to the top of the page whenever it is clicked; this can have an undesirable jumpy effect when a page is transitioning out. If this prop is set to `true` when the component is mounted, then `window.scrollTo` will be monkey-patched so that programmatic scrolling can be disabled while a page is transitioning out. Defaults to false, since this potentially sketchy behavior should be opt-in.

モンキーパッチという言葉通り。ソースコードには

```js
  componentDidMount() {
    if (shouldDelayEnter(this.props.children)) {
      this.setState({
        timeoutId: this.startEnterTimer(),
      })
    }

    if (this.props.monkeyPatchScrolling && typeof window !== 'undefined') {
      // Forgive me for what I'm about to do
      this.originalScrollTo = window.scrollTo
      this.disableScrolling = false
      window.scrollTo = (...args) => {
        if (this.disableScrolling) return
        this.originalScrollTo.apply(window, args)
      }
    }
  }
```

とあり、 `Forgive me for what I'm about to do` という言葉にニヤリとする。とにかくこの `monkeyPatchScrolling` のおかげで一発で修正できたので助かりました。

#### 2019/02/04

デプロイ状況を示すバッジをREADMEに置いた

#### 2019/01/25

keybase.ioから生成される公開鍵を置く。結局デフォルトの pathMap を使うのをやめて、自分で next.config.js を書いた。Next のバージョンを安定版 7 に戻す。

#### 2019/01/18

Next.js 使ってみた, Next.jsの不安定バージョンを使わないと 404.html をルート直下に吐かないという問題がある。時期を改めて安定版が登場したら package.json を更新したい。