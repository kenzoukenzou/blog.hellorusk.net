import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <script
            async
            src={"https://www.googletagmanager.com/gtag/js?id=UA-136305100-1"}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-136305100-1');`
            }}
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="HelloRusk Official Website." />
          <meta property="og:image" content="https://hellorusk.net/static/mika_square.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}