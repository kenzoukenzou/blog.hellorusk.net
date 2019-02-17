import Meta from "next/head";

export default ({ meta }) => (
  <Meta>
    <title key="title">{meta.title} - HelloRusk Official Website</title>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@HelloRusk" />
    <meta property="og:title" content={meta.title} /> 
    <meta property="og:url" content={meta.url} /> 
    <meta property="og:description" content={meta.description} />
  </Meta>
);