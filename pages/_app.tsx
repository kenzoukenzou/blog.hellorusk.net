import App from "next/app";
import { PageTransition } from "next-page-transitions";
import Layout from "../layouts/page-layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
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
          <Layout />
        </PersistGate>
      </Provider>
    );
  }
}