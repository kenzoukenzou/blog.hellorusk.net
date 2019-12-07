import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

export default () => (
  <div>
    <Meta>
      <title key="title">Not Found - HelloRusk Official Website</title>
    </Meta>
    <div className="error">
      <span>404 Not Found</span>
      <br />
      <span>お探しのページは見つかりませんでした。</span>
      <br />
      <br />
      <img src="/hitori.jpg" alt="hitori" />
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
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
);
