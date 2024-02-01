import { Container } from '@/components'
import { fetchServerData } from '@/utils'
import { MOCK_ENDPOINT } from '@/constants'

export default async function Home() {
  const data = await fetchServerData(MOCK_ENDPOINT)

  // console.log(data) // debug

  return (
    <>
      <section className="bg-gradient-to-bl to-teal-500 via-purple-500 from-pink-500">
        <Container className="min-h-screen pt-20">
          <p>Home page</p>
        </Container>
      </section>
      <section className="bg-gradient-to-bl to-teal-500 via-purple-500 from-pink-500">
        <Container className="min-h-screen pt-20">
          <p>Home page</p>
        </Container>
      </section>
    </>
  )
}
