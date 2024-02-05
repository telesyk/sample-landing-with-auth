'use client'

import { SectionType } from '@/types'
import { createContext, useContext } from 'react'

interface CompanyProps {
  about: SectionType | {}
  subscribe?: SectionType | {}
}

export const CompanyContext = createContext<CompanyProps | any>({})

export function CompanyProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: CompanyProps | {}
}) {
  return (
    <CompanyContext.Provider value={{ ...data }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompanyContext = () => useContext(CompanyContext)
