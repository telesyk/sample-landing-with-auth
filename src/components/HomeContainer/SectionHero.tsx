'use client'

import Image from 'next/image'
import { SectionContainer, Heading, SectionLoader } from '..'
import { useHomeContext } from './context'
import { SectionType } from '@/types'

export default function SectionHero() {
  const { hero }: { hero: SectionType | any } = useHomeContext()

  if (!hero) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        base: 'dark bg-gradient-to-bl to-teal-500 via-purple-500 from-pink-500',
        container: 'py-20 lg:pt-36 gap-3 items-center text-center',
      }}
    >
      <Heading
        className="dark max-w-2xl"
        variation="xl"
        subheading={hero?.subtitle}
      >
        {hero?.title}
      </Heading>
      <div className="w-full sm:w-auto flex-1 my-12 lg:my-6">
        <Image
          alt="Service dashboard"
          src={hero?.imageSrc}
          blurDataURL={hero?.preloadImageSrc}
          width={600}
          height={371}
          quality={90}
          placeholder="blur"
          className="w-full h-auto sm:w-[540px] md:w-[700px] lg:h-[608px] lg:w-auto"
        />
      </div>
    </SectionContainer>
  )
}
