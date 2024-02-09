'use client'

import Image from 'next/image'
import { Heading, PricingCard } from '..'
import { useProfileContext } from './context'
import { SectionType, SubscriptionsType } from '@/types'
import { Link } from '@nextui-org/react'
import { getSubscriptionsList } from '@/utils'
import { CURRENCY_SIGN } from '@/constants'

interface SectionProps {
  about: SectionType | any
  subscription: SubscriptionsType
  profile: any
  handleUserSubscriptionUpdate: () => void
}

export default function SectionAbout() {
  const {
    about,
    subscription,
    profile,
    handleUserSubscriptionUpdate,
  }: SectionProps = useProfileContext()

  const subscriptions = getSubscriptionsList(subscription, [
    profile.subscription?.title,
  ])

  return (
    <div className="flex flex-col my-24">
      <Heading className="text-center mb-8" variation="lg">
        {about?.title}
      </Heading>
      <div className="p-12 lg:24 w-full max-w-2xl mx-auto rounded-xl shadow-xl bg-foreground/10">
        {profile && (
          <div className="flex gap-6 items-center">
            <Image
              src={profile.image}
              alt={profile.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-primary/70 w-16 h-16 md:w-24 md:h-24"
            />
            <div className="flex-1 space-y-2">
              <Heading variation="md">{profile.name}</Heading>
              <p className="text-medium text-foreground">
                <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 mt-12 text-foreground text-sm lg:text-base">
          <div className="flex gap-2 lg:gap-4">
            <div className="flex-auto basis-1/4 font-bold">Email:</div>
            <div className="flex-auto basis-3/4">{profile.email}</div>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <div className="flex-auto basis-1/4 font-bold">Subscription:</div>
            <div className="flex-auto basis-3/4 space-x-2">
              <span className="capitalize">{profile?.subscription?.title}</span>
              {profile?.subscription?.title !== 'free' && (
                <span className="font-bold">
                  {profile?.subscription?.price} {CURRENCY_SIGN}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-12">
          {subscriptions &&
            subscriptions.map(item => (
              <PricingCard
                key={item.title}
                handleClick={handleUserSubscriptionUpdate}
                details={{
                  title: item.title,
                  price: item.price,
                  subtitle: item.subtitle,
                  benefits: item.benefits,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
