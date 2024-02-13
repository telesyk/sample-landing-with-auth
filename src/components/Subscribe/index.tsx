'use client'

import { SectionContainer, Heading, SectionLoader, SubscribeForm } from '..'
import { SectionType } from '@/types'

export default function Subscribe({
  subscribe,
}: {
  subscribe: SectionType | any
}) {
  if (!subscribe) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        base: 'border-t-1',
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
      <div className="flex-1">
        <SubscribeForm />
      </div>
    </SectionContainer>
  )
}
