import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default () => (
  <div>
    <Meta>
      <title key="title">form - HelloRusk Official Website</title>
    </Meta>
    <div className="form-container">
      <form name="contact" action="/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <TextField
          name="name"
          label="Name (Optional)"
          margin="normal"
        />
        <br />
        <TextField
          name="message"
          label="Message"
          multiline
          rows="5"
          margin="normal"
          fullWidth
          required
          variant="filled"
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
    <br />
    <br />
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
        text-align: left;
        width: 300px;
      }
    `}</style>
  </div>
);