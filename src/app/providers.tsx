'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from '@/app/components'

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
