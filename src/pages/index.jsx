import Explore from '@/components/top/Explore'
import Banner from '@/components/top/Banner'
import Cards from '@/components/top/Cards'
import Hosting from '@/components/top/Hosting'
import json from '@/data/sheets.json'

export default function Home({ places, discover, live }) {
  return (
    <main>
      <Explore data={places} />
      <Banner />
      {/* Cards コンポーネントへの Props の渡し方 2 パターン */}
      {/* どちらも同じ結果となるので、スプレッド構文の方が良い */}
      <Cards {...live} />
      <Cards title={discover.title} items={discover.items} urlPrefix={discover.urlPrefix} />
      <Hosting />
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      places: json.places,
      discover: json.discover,
      live: json.live,
    },
  }
}
