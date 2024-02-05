'use client'

import Image from 'next/image'
import { Heading, SectionLoader } from '..'
import { useProfileContext } from './context'
import { SectionType } from '@/types'

export default function SectionAbout() {
  const {
    about,
    profile,
  }: {
    about: SectionType | any
    profile: any
  } = useProfileContext()

  if (!about) return <SectionLoader />

  return (
    <div className="flex flex-col my-24">
      <Heading className="text-center mb-8" variation="lg">
        {about?.title}
      </Heading>
      <div className="flex gap-6 items-center">
        <Image
          src={profile.user.image}
          alt={profile.user.name}
          width={100}
          height={100}
          className="rounded-full border-2 border-primary/50 w-12 h-12 md:w-24 md:h-24"
        />
        <Heading className="flex-1" variation="md">
          {profile.user?.name}
        </Heading>
      </div>
      <p className="my-6 text-medium text-foreground">
        Email: {profile.user.email}
      </p>
    </div>
  )
}
