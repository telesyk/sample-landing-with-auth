'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { SectionType, AdditionalInfoType, SubscriptionsType } from '@/types'
import {
  getSubscriptionsList,
  getLocalStorage,
  getSubscriptionDetails,
} from '@/utils'
import { STORAGE_NAME } from '@/constants'

interface ProfileProps {
  about: SectionType | {}
  subscription: SubscriptionsType
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
    // First time signup user using 'free' subscription
    const initData = {
      subscription: getSubscriptionDetails(subscriptions),
      locale: navigator ? navigator?.language : 'en',
    }
    const currentExtraData = getLocalStorage(STORAGE_NAME)
    const extraData = currentExtraData
      ? currentExtraData
      : getLocalStorage(STORAGE_NAME, JSON.stringify(initData))

    setState(prev => ({
      ...prev,
      ...JSON.parse(extraData || ''),
    }))
  }, [])

  const handleUserSubscriptionUpdate = (sub: string) => {
    const updated = getSubscriptionDetails(subscriptions, sub)
    setState(prev => ({
      ...prev,
      subscription: updated,
    }))

    getLocalStorage(
      STORAGE_NAME,
      JSON.stringify({
        ...state,
        subscription: updated,
      })
    )
  }

  const profileData = {
    ...pageData,
    profile: {
      ...session?.user,
      ...state,
    },
    handleUserSubscriptionUpdate,
  }

  return (
    <ProfileContext.Provider value={{ ...profileData }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
