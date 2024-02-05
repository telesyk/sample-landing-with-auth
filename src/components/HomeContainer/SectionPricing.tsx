'use client'

import { SectionContainer, Heading, SectionLoader } from '..'
import { useHomeContext } from './context'
import { SectionType } from '@/types'

export default function SectionPricing() {
  const { pricing }: { pricing: SectionType | any } = useHomeContext()

  if (!pricing) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        container: 'py-20 gap-6 lg:gap-10 items-center',
      }}
      justify="center"
    >
      <div className="flex-1 text-center">
        <Heading variation="lg" subheading={pricing.subtitle}>
          {pricing.title}
        </Heading>
      </div>
      <div className="flex-1">Pricing items</div>
    </SectionContainer>
  )
}
