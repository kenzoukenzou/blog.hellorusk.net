import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

export default () => (
  <div>
    <Meta>
      <title key="title">form - HelloRusk Official Website</title>
    </Meta>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Name: <br /><textarea name="name" className="name"></textarea></label>
      </p>
      <p>
        <label>Message: <br /><textarea name="message" className="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <div className="jump">
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
  </div>
);