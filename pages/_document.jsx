import Document, { Html, Head, Main, NextScript } from "next/document";
import BLOG from "../blog.config";
import { CSSBaseline } from "@zeit-ui/react";
import flush from "styled-jsx/server";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CSSBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
          {flush()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang={BLOG.language}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
