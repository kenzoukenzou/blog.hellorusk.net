import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import { meta } from "./blog/20190217.mdx";

const PostPreview = ({ post }) => {
  return (
    <div className="blog">
      <div className="date">{post.date}</div>
      <div className="title"><Link scroll={false} href={post.url}><a>{post.title}</a></Link></div>
    </div>
  )
}

export default () => (
  <div>
    <Meta>
      <title key="title">blog | HelloRusk Official Website</title>
    </Meta>
    <PostPreview post={meta}/>
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
)