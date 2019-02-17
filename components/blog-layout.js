import Link from "next/link";
import Footer from "./footer";

export default ({ meta }) => {
  const tweetlink = `https://twitter.com/intent/tweet?text=${meta.title}%20-%20HelloRusk%20Official%20Website%0a&url=https://hellorusk.net${meta.url}`;

  return (
    <div>
      <div className="tweet">
        <a href={tweetlink}><img src="/static/twitter.png" height="30" alt="tweet" /></a>
        <style jsx>{`
          .tweet {
            text-align: right;
          }
        `}</style>
      </div>
      <br/>
      <div className="jump">
        <Link scroll={false} href="/blog">
          <a>back</a>
        </Link>
        <style jsx global>{`
          p {
            font-size: 0.9em;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
};