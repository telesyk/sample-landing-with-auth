'use client'

import { SectionType } from '@/types'
import { createContext, useContext } from 'react'

interface ProductProps {
  about: SectionType | {}
  subscribe?: SectionType | {}
}

export const ProductContext = createContext<ProductProps | any>({})

export function ProductProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: ProductProps | {}
}) {
  return (
    <ProductContext.Provider value={{ ...data }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)
