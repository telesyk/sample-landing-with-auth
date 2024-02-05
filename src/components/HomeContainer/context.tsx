'use client'

import { SectionType } from '@/types'
import { createContext, useContext } from 'react'

interface HomeProps {
  hero: SectionType | {}
  about: SectionType | {}
  pricing?: SectionType | {}
  subscribe?: SectionType | {}
}

export const HomeContext = createContext<HomeProps | any>({})

export function HomeProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: HomeProps | {}
}) {
  return (
    <HomeContext.Provider value={{ ...data }}>{children}</HomeContext.Provider>
  )
}

export const useHomeContext = () => useContext(HomeContext)
