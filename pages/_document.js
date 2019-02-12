import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="HelloRusk Official Website." />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          body {
            font-family: 'Noto Sans JP', sans-serif;
            font-display: swap;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
          }
          
          a {
            text-decoration: none;
          }
          
          p {
            text-align: center;
          }
          
          ul {
            list-style-type: none;
          }
          
          .jump {
            text-align: center;
          }
        `}</style>
      </html>
    )
  }
}