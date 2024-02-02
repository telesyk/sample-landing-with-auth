import { fetchServerData } from '@/utils'
import { MOCK_ENDPOINT } from '@/constants'
import Image from 'next/image'
import { SectionContainer, Heading } from '@/components'

export default async function Home() {
  const data = await fetchServerData(MOCK_ENDPOINT)
  const {
    pages: { home },
  } = data

  const classes = {
    base: 'dark bg-gradient-to-bl to-teal-500 via-purple-500 from-pink-500',
    container: 'py-20 lg:pt-36 gap-3 items-center text-center',
  }

  return (
    <>
      <SectionContainer classNames={classes}>
        <Heading
          className="dark max-w-2xl"
          variation="xl"
          subheading={home?.hero?.subtitle}
        >
          {home?.hero?.title}
        </Heading>
        <div className="w-full sm:w-auto flex-1 my-12 lg:my-6">
          <Image
            alt="Service dashboard"
            src={home?.hero?.imageSrc}
            blurDataURL={home?.hero?.preloadImageSrc}
            width={600}
            height={371}
            quality={90}
            placeholder="blur"
            className="w-full h-auto sm:w-[540px] md:w-[700px] lg:h-[608px] lg:w-auto"
          />
        </div>
      </SectionContainer>
    </>
  )
}
