'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { SectionType, AdditionalInfoType } from '@/types'
import { useLocalStore } from '@/utils'

interface ProfileProps {
  about: SectionType | {}
}

export const ProfileContext = createContext<ProfileProps | any>({})

export function ProfileProvider({
  children,
  pageData,
}: {
  children: React.ReactNode
  pageData: ProfileProps | {}
}) {
  const [state, setState] = useState<AdditionalInfoType | {}>({})
  const { data: session } = useSession()

  useEffect(() => {
    const additionalUserData = useLocalStore('additionalUserData')
    if (!additionalUserData)
      useLocalStore(
        'additionalUserData',
        JSON.stringify({
          subscription: 'free',
          location: 'EU',
        })
      )

    const additionalStringData = useLocalStore('additionalUserData')
    const additionalData = JSON.parse(additionalStringData)

    setState(prev => ({
      ...prev,
      ...additionalData,
    }))
  }, [])

  const profileData = {
    ...pageData,
    profile: {
      user: {
        ...session?.user,
      },
      additional: { ...state },
    },
  }

  return (
    <ProfileContext.Provider value={{ ...profileData }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
