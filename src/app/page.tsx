import { fetchServerData } from '@/utils'
import {
  HomeAbout,
  HomeHero,
  HomePricing,
  HomeProvider,
  Subscribe,
} from '@/components'

export default async function Home() {
  const data = await fetchServerData()
  const {
    pages: { home },
    global: { subscription, subscribe },
  } = data

  return (
    <HomeProvider data={{ ...home, subscription }}>
      <HomeHero />
      <HomePricing />
      <HomeAbout />
      <Subscribe subscribe={subscribe} />
    </HomeProvider>
  )
}
