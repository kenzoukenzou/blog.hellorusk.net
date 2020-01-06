import Link from "next/link";
import Footer from "../components/footer";
import {
  MetaUrl,
  MetaTitle,
  removeTrailingSlash,
  encodeCharacterForLink,
  MetaDate
} from "../components/blog-meta";
import data from "../components/posts.json";

const postsIndexHash: any = data["postsIndexHash"];

interface MetaLayout {
  meta: {
    date: MetaDate;
    title: MetaTitle;
    url: MetaUrl;
  };
}

export default ({ meta }: MetaLayout) => {
  const normalizedUrl = removeTrailingSlash(meta.url);
  const normalizedTitle = encodeCharacterForLink(meta.title);

  const tweetlink = `https://twitter.com/intent/tweet?text=${normalizedTitle}%20-%20HelloRusk%20Official%20Website%0a&url=https://hellorusk.net${normalizedUrl}`;

  const index = postsIndexHash[meta.date];

  return (
    <>
      <br />
      <div className="tweet">
        <a href={tweetlink} target="_blank">
          <img src="/twitter.svg" height="40" alt="tweet" />
        </a>
        <style jsx>{`
          .tweet {
            text-align: right;
          }
        `}</style>
      </div>
      <div className="jump">
        <Link href={`/blog?page=${index}`}>
          <a>back</a>
        </Link>
        <br />
        <style jsx global>{`
          p {
            font-size: 0.9em;
          }

          p img {
            display: block;
            margin: 0 auto;
          }

          .hatena {
            border: 0;
            width: 100%;
            height: 190px;
            max-width: 400px;
          }

          .math {
            overflow-x: auto;
          }

          @media screen and (min-width: 657px) {
            p img {
              width: 650px;
            }
          }

          @media screen and (max-width: 656px) {
            p img {
              width: 100%;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export const microLinkStyle = {
  color: "#000000",
  fontFamily: "Noto Sans JP, sans-serif"
};
