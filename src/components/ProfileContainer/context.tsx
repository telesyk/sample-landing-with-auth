'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { SectionType, AdditionalInfoType, SubscriptionType } from '@/types'
import { getSubscriptionsList, useLocalStore } from '@/utils'
import { STORAGE_NAME } from '@/constants'

interface ProfileProps {
  about: SectionType | {}
  subscription: SubscriptionType
}

export const ProfileContext = createContext<ProfileProps | any>({})

export function ProfileProvider({
  children,
  pageData,
}: {
  children: React.ReactNode
  pageData: ProfileProps | any // used temporaly, need to be fixed in a future
}) {
  const [state, setState] = useState<AdditionalInfoType | {}>({})
  const { data: session } = useSession()

  const subscriptions = getSubscriptionsList(pageData?.subscription)

  useEffect(() => {
    const additionalUserData = useLocalStore(STORAGE_NAME)
    if (!additionalUserData)
      // Init first UserData
      useLocalStore(
        STORAGE_NAME,
        JSON.stringify({
          // First time signup user using 'free' subscription
          subscription: subscriptions[0],
          location: 'EU',
        })
      )

    const additionalStringData = useLocalStore(STORAGE_NAME)
    const additionalData = JSON.parse(additionalStringData)

    setState(prev => ({
      ...prev,
      ...additionalData,
    }))
  }, [])

  const handleUserSubscriptionUpdate = (sub: string) => {
    setState(prev => ({
      ...prev,
      subscription: subscriptions.find(item => item.title === sub),
    }))

    useLocalStore(
      STORAGE_NAME,
      JSON.stringify({
        ...state,
        subscription: subscriptions.find(item => item.title === sub),
      })
    )
  }

  const profileData = {
    ...pageData,
    profile: {
      ...session?.user,
      ...state,
    },
  }

  return (
    <ProfileContext.Provider
      value={{ ...profileData, handleUserSubscriptionUpdate }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
