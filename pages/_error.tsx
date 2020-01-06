import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import ModeSwitch from "../components/mode-switch";

export default () => (
  <div>
    <Meta>
      <title key="title">Not Found - HelloRusk Official Website</title>
    </Meta>
    <ModeSwitch />
    <div className="error">
      <span>404 Not Found</span>
      <br />
      <span>お探しのページは見つかりませんでした。</span>
      <br />
      <br />
      <img src="/hitori.jpg" width="90%" alt="hitori" />
      <br />
      <style jsx>{`
        .error {
          padding-top: 15px;
          text-align: center;
        }
      `}</style>
    </div>
    <br />
    <div className="jump">
      <a href="/">HOME</a>
    </div>
    <Footer />
  </div>
);
