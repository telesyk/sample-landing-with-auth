import { fetchServerData } from '@/utils'
import {
  HomeAbout,
  HomeHero,
  HomePricing,
  HomeSubscribe,
  HomeProvider,
} from '@/components'

export default async function Home() {
  const data = await fetchServerData()
  const {
    pages: { home },
  } = data

  return (
    <HomeProvider data={home}>
      <HomeHero />
      <HomeAbout />
      <HomePricing />
      <HomeSubscribe />
    </HomeProvider>
  )
}
