import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
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
      </Container>
    )
  }
}