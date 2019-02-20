import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import PostsPreviewer from "./posts-renderer";

export default () => (
  <div>
    <Meta>
      <title key="title">blog - HelloRusk Official Website</title>
    </Meta>
    <PostsPreviewer />
    <br/>
    <div className="jump">
      <Link scroll={false} href="/">
        <a>home</a>
      </Link>
    </div>
    <Footer />
    <style jsx>{`      
      .blog {
        text-align: left;
        display: inline-block;
      }
    `}</style>
    <style jsx global>{`
      .blog {
        animation: fadein 0.2s linear;
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      .date {
        font-size: 0.9em;
        color: #666666;
        font-style: italic;
        margin-top: 1em;
      }

      .title {
        font-size: 1.2em;
        margin-bottom: 0.5em;
        font-weight: 400;
      }

      .title a {
        color: #000000;
      }
    `}</style>
  </div>
);