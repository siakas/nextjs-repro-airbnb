import Meta from '@/components/layout/Meta'
import Header from '@/components/layout/Header'
import Hero from '@/components/top/Hero'
import Explore from '@/components/top/Explore'
import Banner from '@/components/top/Banner'
import Cards from '@/components/top/Cards'
import Hosting from '@/components/top/Hosting'
import Footer from '@/components/layout/Footer'
import json from '@/data/sheets.json'

export default function Home({ pages, places, discover, live }) {
  return (
    <>
      <Meta {...pages} />

      <Header />

      <main>
        <Hero />
        <Explore data={places} />
        <Banner />
        {/* Cards コンポーネントへの Props の渡し方 2 パターン */}
        {/* どちらも同じ結果となるので、スプレッド構文の方が良い */}
        <Cards {...live} />
        <Cards title={discover.title} items={discover.items} urlPrefix={discover.urlPrefix} />
        <Hosting />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      pages: json.pages.top,
      places: json.places,
      discover: json.discover,
      live: json.live,
    },
  }
}
