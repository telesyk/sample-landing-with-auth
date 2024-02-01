'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from '@/components'

export function Providers({
  children,
  sessionProps,
}: {
  children: React.ReactNode
  sessionProps: any
}) {
  return (
    <SessionProvider {...sessionProps}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  )
}
