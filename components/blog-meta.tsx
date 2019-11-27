import Meta from "next/head";

export type MetaDate = string;
export type MetaTitle = string;
export type MetaUrl = string;
export type MetaDescription = string;
export type MetaImg = string;

export const internalLink = (date: MetaDate) => {
  return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (match, p1, p2, p3) => {
    return `/posts/${p1}${p2}${p3}`;
  })
}

export const encodeCharacterForLink = (str: MetaTitle) => {
  return str.replace(/#/g, "%23")
            .replace(/\+/g, "%2B");
};

export const removeTrailingSlash = (url: MetaUrl) => {
  return url.replace(/^(.*)\/$/g, (match, p1) => {
    return p1;
  })
}

interface MetaHead {
  meta: {
    title: MetaTitle,
    url: MetaUrl,
    description: MetaDescription,
    img: MetaImg,
  }
}

export default ({ meta }: MetaHead) => {
  const normalizedUrl = removeTrailingSlash(meta.url);

  return (
    <Meta>
      <title key="title">{meta.title} - HelloRusk Official Website</title>
      <meta property="og:title" content={meta.title} /> 
      <meta property="og:url" content={normalizedUrl} /> 
      <meta property="og:description" content={meta.description} />
      {(meta.img) ?
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
      : <meta name="twitter:card" content="summary" />}
      {(meta.img) ?
        <meta property="og:image" content={"https://hellorusk.net" + meta.img} key="og_image" />
      : <meta property="og:image" content="https://hellorusk.net/mika_square.png" />}
      {(meta.img) ?
        <meta name="twitter:image" content={"https://hellorusk.net" + meta.img} key="twitter_image" />
      : <meta name="twitter:image" content="https://hellorusk.net/mika_square.png" />}
    </Meta>
  )
};