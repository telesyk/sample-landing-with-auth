'use client'

import Image from 'next/image'
import { Heading, SectionLoader } from '..'
import { useProfileContext } from './context'
import { SectionType } from '@/types'

export default function SectionAbout() {
  // const {
  //   session,
  //   profile: { about },
  //   subscription,
  // }: {
  //   session: any
  //   profile: {
  //     about: SectionType
  //   }
  //   subscription: any
  // } = useProfileContext()
  const data: any = useProfileContext() // debug
  console.log(data) // debug
  const {
    profile: { about },
    session,
  } = data // debug

  if (!about) return <SectionLoader /> // Need to move into Suspense

  return (
    <div className="flex flex-col my-24">
      <Heading className="text-center mb-8" variation="lg">
        {about?.title}
      </Heading>
      <div className="p-8 md:p-16 rounded-xl shadow-xl bg-foreground/10">
        {session && session.user && (
          <div className="flex gap-6 items-center">
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-primary/75 w-12 h-12 md:w-24 md:h-24"
            />
            <Heading className="flex-1" variation="md">
              {session.user.name}
            </Heading>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-6 my-6 text-foreground">
          {/* item */}
          <div className="flex-auto basis-1/5">
            <span className="font-bold">Id:</span>
          </div>
          <div className="flex-auto basis-3/5">
            <p className="italic">0123456789qwer</p>
          </div>
          {/* item */}
          <div className="flex-auto basis-1/5">
            <span className="font-bold">IP:</span>
          </div>
          <div className="flex-auto basis-3/5">
            <p className="italic">0.0.0.1</p>
          </div>
          {/* item */}
          {session && session.user && (
            <>
              <div className="flex-auto basis-1/5">
                <span className="font-bold">Email:</span>
              </div>
              <div className="flex-auto basis-3/5">
                <p className="italic">{session.user.email}</p>
              </div>
            </>
          )}
          {/* item */}
          <div className="flex-auto basis-1/5">
            <span className="font-bold">Subscription:</span>
          </div>
          <div className="flex-auto basis-3/5">
            <p className="italic">subscription type</p>
          </div>
          {/* item */}
          <div className="flex-auto basis-1/5">
            <span className="font-bold">Job title:</span>
          </div>
          <div className="flex-auto basis-3/5">
            <p className="italic">Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
