import Meta from "next/head";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import ModeSwitch from "../components/mode-switch";

export default () => {
  return (
    <div>
      <Meta>
        <meta
          name="google-site-verification"
          content="NukXzTqPewV5uTImQdXdiNq4ZKc6d3I65Bq9amzEM1s"
        />
        <title key="title">HelloRusk Official Website</title>
        <meta property="og:title" content="HelloRusk Official Website" />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="HelloRuskの公式ウェブサイト" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://hellorusk.net/mika_square.png"
        />
        <meta
          name="twitter:image"
          content="https://hellorusk.net/mika_square.png"
        />
      </Meta>
      <ModeSwitch />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
