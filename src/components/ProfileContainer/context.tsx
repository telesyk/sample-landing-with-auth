'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useIndexedDB } from '@/hooks'
import { SectionType } from '@/types'

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
  const [state, setState] = useState({
    session: { ...session?.user },
    local: {},
  })
  const userData = useIndexedDB(session?.user?.email, {
    ...state,
  })

  useEffect(() => {
    if (!session) return
    if (session && window) {
      setState({
        ...userData,
        local: {
          lang: window.navigator.language,
          ua: window.navigator.userAgent,
        },
      })
    }
  }, [session])

  return (
    <ProfileContext.Provider value={{ ...data, ...state }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
