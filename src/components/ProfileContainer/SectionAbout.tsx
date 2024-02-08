'use client'

import Image from 'next/image'
import { Heading, PricingCard } from '..'
import { useProfileContext } from './context'
import { SectionType, AdditionalInfoType } from '@/types'
import { Link } from '@nextui-org/react'

interface SectionProps {
  about: SectionType | any
  profile: {
    user: any
    additional: AdditionalInfoType
  }
}

export default function SectionAbout() {
  const {
    about,
    profile: { user, additional },
  }: SectionProps = useProfileContext()

  return (
    <div className="flex flex-col my-24">
      <Heading className="text-center mb-8" variation="lg">
        {about?.title}
      </Heading>
      <div className="p-12 lg:24 w-full max-w-xl mx-auto rounded-xl shadow-xl bg-foreground/10">
        {user && additional && (
          <div className="flex gap-6 items-center">
            <Image
              src={user.image}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-primary/70 w-16 h-16 md:w-24 md:h-24"
            />
            <div className="flex-1 space-y-2">
              <Heading variation="md">{user?.name}</Heading>
              <p className="text-medium text-foreground">
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 mt-12 text-foreground text-sm lg:text-base">
          <div className="flex gap-2 lg:gap-4">
            <div className="flex-auto basis-1/4 font-bold">Email:</div>
            <div className="flex-auto basis-3/4">{user.email}</div>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <div className="flex-auto basis-1/4 font-bold">Subscription:</div>
            <div className="flex-auto basis-3/4">{additional.subscription}</div>
          </div>
        </div>
        {/* <p className="my-6 text-medium text-foreground">Email: {user.email}</p>
        <p className="my-6 text-medium text-foreground">Subscription: free</p>
        <p className="my-6 text-medium text-foreground">Location: UA</p>
        <p className="my-6 text-medium text-foreground">Position: freelancer</p> */}
        <div className="flex justify-center gap-4 mt-12">
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  )
}
