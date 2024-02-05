import { fetchServerData } from '@/utils'
import { MOCK_ENDPOINT } from '@/constants'
import {
  HomeAbout,
  HomeHero,
  HomePricing,
  HomeSubscribe,
  HomeProvider,
} from '@/components'

export default async function Home() {
  const data = await fetchServerData(MOCK_ENDPOINT)
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
