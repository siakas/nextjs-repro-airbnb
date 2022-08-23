import Head from 'next/head'

export default function Meta({ url, title, description }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="Airbnb Repro" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <title>{title}</title>
    </Head>
  )
}
