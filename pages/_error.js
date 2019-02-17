import Meta from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default () => (
  <div>
    <Meta>
      <title key="title">error | HelloRusk Official Website</title>
    </Meta>
    <Header />
    <div className="error">
      <span>ERROR</span>
      <style jsx>{`
        .error {
          padding-top: 15px;
          text-align: center;
        }
      `}</style>
    </div>
    <br/>
    <div className="jump">
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
);