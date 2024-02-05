'use client'

import { createContext, useContext } from 'react'
import { SectionType } from '@/types'
import { useSession } from 'next-auth/react'

interface ProfileProps {
  about: SectionType | {}
}

export const ProfileContext = createContext<ProfileProps | any>({})

export function ProfileProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: ProfileProps | {}
}) {
  const { data: session } = useSession()
  return (
    <ProfileContext.Provider value={{ ...data, profile: session }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
