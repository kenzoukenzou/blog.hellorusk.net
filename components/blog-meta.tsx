import Meta from "next/head";

interface Meta {
  meta: {
    title: string,
    url: string,
    description: string
  }
}

export default ({ meta }: Meta) => (
  <Meta>
    <title key="title">{meta.title} - HelloRusk Official Website</title>
    <meta property="og:title" content={meta.title} /> 
    <meta property="og:url" content={meta.url} /> 
    <meta property="og:description" content={meta.description} />
  </Meta>
);