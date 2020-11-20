import Head from 'next/head'

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | Bloggie` : 'Bloggie'}</title>
      <meta name="description" content={description} />
      <meta name="author" content="CoffeJeanCode" />
      <meta name="keywords" content="blog, bloggie, team blog, team" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
    </Head>
  )
}
