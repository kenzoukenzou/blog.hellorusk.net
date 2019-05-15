import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";

export default () => (
  <div>
    <Meta>
      <title key="title">form - HelloRusk Official Website</title>
    </Meta>
    <div className="form-container">
      <form name="contact" action="/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <p>
          <label>Name: <br /><textarea name="name" className="name" required></textarea></label>
        </p>
        <p>
          <label>Message: <br /><textarea name="message" className="message" required></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <br />
      </form>
    </div>
    <div className="jump">
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
    <style jsx>{`
      .form-container {
        text-align: center;
      }

      form {
        display: inline-block;
      }
    `}</style>
  </div>
);