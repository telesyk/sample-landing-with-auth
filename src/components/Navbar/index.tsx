'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Link,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { AcmeLogo } from '@/components/icons'
import { AuthButton } from '@/components'

type menuItem = {
  title: string
  url: string
}

export default function AppNavbar({ menuItems }: { menuItems: menuItem[] }) {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="dark bg-transparent backdrop-filter-none"
    >
      <NavbarContent>
        {/* authoorization check */}
        {session && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden"
          />
        )}
        <NavbarBrand className="stroke-foreground text-foreground">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      {/* authoorization check */}
      {session && (
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.url}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      <NavbarContent justify="end">
        <NavbarItem>
          <AuthButton session={session} />
        </NavbarItem>
      </NavbarContent>
      {/* authoorization check */}
      {session && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  )
}
