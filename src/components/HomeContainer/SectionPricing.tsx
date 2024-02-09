'use client'

import { getSubscriptionsList } from '@/utils'
import { SectionContainer, Heading, SectionLoader, PricingCard } from '..'
import { useHomeContext } from './context'
import {
  SectionType,
  SubscriptionType,
  SubscriptionsImagesType,
  SubscriptionsType,
} from '@/types'

interface PricingPageProps extends SectionType {
  subscriptionImage: SubscriptionsImagesType
}
interface Props {
  pricing: PricingPageProps
  subscription: SubscriptionsType
}

export default function SectionPricing() {
  const { pricing, subscription }: Props = useHomeContext()
  const subscriptions = getSubscriptionsList(subscription)

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
      <div className="flex-1 overflow-x-auto p-5 max-w-full">
        {subscriptions.length && (
          <div className="flex gap-6">
            {subscriptions.map((item: any) => (
              <PricingCard
                key={item.title}
                details={{ ...item }}
                handleClick={() => console.log('test')}
                image={
                  pricing.subscriptionImage[item?.title as SubscriptionType]
                }
                className="min-w-72"
              />
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
