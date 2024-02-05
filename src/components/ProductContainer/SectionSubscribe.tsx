'use client'

import { SectionContainer, Heading, SectionLoader } from '..'
import { useProductContext } from './context'
import { SectionType } from '@/types'

export default function SectionSubscribe() {
  const { subscribe }: { subscribe: SectionType | any } = useProductContext()

  if (!subscribe) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        container: 'py-20 gap-6 lg:gap-10 items-center',
      }}
      justify="center"
    >
      <div className="flex-1 text-center">
        <Heading
          variation="lg"
          subheading={subscribe.subtitle}
          className="uppercase"
        >
          {subscribe.title}
        </Heading>
      </div>
      <div className="flex-1">subscribe form</div>
    </SectionContainer>
  )
}
