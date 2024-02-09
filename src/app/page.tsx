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
    global: { subscription },
  } = data

  return (
    <HomeProvider data={{ ...home, subscription }}>
      <HomeHero />
      <HomePricing />
      <HomeAbout />
      <HomeSubscribe />
    </HomeProvider>
  )
}
