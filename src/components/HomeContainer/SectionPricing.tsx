'use client'

import { useEffect, useState } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { useHomeContext } from './context'
import { ANNUAL_PAYMENT_TYPE, PAYMENT_KEY } from '@/constants'
import { SectionContainer, Heading, SectionLoader, PricingCard } from '..'
import { getLocalStorage, getSubscriptionsList } from '@/utils'
import { SectionType, SubscriptionsType } from '@/types'

interface Props {
  pricing: SectionType
  subscription: SubscriptionsType
}

export default function SectionPricing() {
  const { pricing, subscription }: Props = useHomeContext()
  const [paymentType, setPaymenttType] = useState<string | any>(
    ANNUAL_PAYMENT_TYPE
  )
  const subscriptions = getSubscriptionsList(subscription)

  useEffect(() => {
    const currentPayment = getLocalStorage(PAYMENT_KEY)
    const updatedPayment = !currentPayment
      ? getLocalStorage(PAYMENT_KEY, ANNUAL_PAYMENT_TYPE)
      : currentPayment
    setPaymenttType(updatedPayment)
  }, [])

  const handlePaymentChange = (type: string | any) => {
    getLocalStorage(PAYMENT_KEY, type)
    setPaymenttType(type)
  }

  const renderTabTitle = (title: string) => <div className="px-8">{title}</div>

  if (!pricing) return <SectionLoader />

  return (
    <SectionContainer
      classNames={{
        container: 'py-20 gap-6 lg:gap-10 items-center',
      }}
      justify="center"
    >
      <div className="flex-1 text-center mb-4 lg:mb-8">
        <Heading variation="lg" subheading={pricing.subtitle}>
          {pricing.title}
        </Heading>
      </div>
      <Tabs
        selectedKey={paymentType}
        onSelectionChange={handlePaymentChange}
        color="warning"
        radius="full"
        aria-label="Payment period"
      >
        <Tab
          key="monthly"
          titleValue="Monthly"
          title={renderTabTitle('Monthly')}
        />
        <Tab
          key="annual"
          titleValue="Annual"
          title={renderTabTitle('Annual')}
        />
      </Tabs>
      <div className="flex-1 overflow-x-auto p-5 max-w-full">
        {subscriptions.length && (
          <div className="flex gap-6">
            {subscriptions.map((item: any) => (
              <PricingCard
                key={item.title}
                details={{ ...item }}
                handleClick={() => console.log('test')}
                image={item.image}
                className="min-w-72"
                paymentType={paymentType}
              />
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
