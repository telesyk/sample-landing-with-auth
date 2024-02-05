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
import Auth from './Auth'
import { MenuItemType } from '@/types'

export default function AppNavbar({
  menu,
}: {
  menu: {
    navMenu: MenuItemType[]
    userMenu?: MenuItemType[]
  }
}) {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { navMenu, userMenu } = menu

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      classNames={{
        base: `flex z-40 w-full h-auto items-center justify-center 
        data-[menu-open=true]:border-none sticky top-0 
        inset-x-0 dark bg-transparent backdrop-saturate-100
        backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl`,
      }}
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
        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {navMenu.map((item, index) => (
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
          <Auth session={session} menu={userMenu} />
        </NavbarItem>
      </NavbarContent>
      {/* authoorization check */}
      {session && (
        <NavbarMenu>
          {navMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === navMenu.length - 1
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
