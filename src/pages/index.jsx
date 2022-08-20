import Explore from '@/components/top/Explore'
import Banner from '@/components/top/Banner'
import json from '@/data/sheets.json'

export default function Home({ places }) {
  return (
    <main>
      <Explore data={places} />
      <Banner />
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      places: json.places,
    },
  }
}
