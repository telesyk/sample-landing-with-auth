'use client'

import Image from 'next/image'
import { SectionContainer, Heading, SectionLoader } from '..'
import { useCompanyContext } from './context'
import { SectionType } from '@/types'

export default function SectionAbout() {
  const { about }: { about: SectionType | any } = useCompanyContext()

  if (!about) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        container: 'py-20 gap-6 lg:gap-10 items-center lg:flex-row',
      }}
      justify="center"
    >
      <div className="flex-1 sm:basis-1/2 lg:basis-1/3">
        <Heading variation="lg">{about?.title}</Heading>
        <p className="my-7 text-medium lg:max-w-[74%]">{about?.content}</p>
      </div>
      <div className="flex-1 sm:basis-1/2 lg:basis-2/3 lg:pl-8">
        <Image
          alt="Service about"
          src={about?.imageSrc}
          blurDataURL={about?.preloadImageSrc}
          width={463}
          height={255}
          quality={90}
          placeholder="blur"
          className="w-full h-auto shadow-lg"
        />
      </div>
    </SectionContainer>
  )
}
