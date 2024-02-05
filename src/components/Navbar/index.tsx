'use client'

import { useCallback, useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
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
import Auth from './Auth'
import { AcmeLogo } from '@/components/icons'
import { MenuItemType } from '@/types'

const notHomeNavClass =
  'bg-gradient-to-bl from-pink-500/75 via-purple-500/75 to-teal-500/75'

export default function AppNavbar({
  menu,
}: {
  menu: {
    navMenu: MenuItemType[]
    userMenu?: MenuItemType[]
  }
}) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navClass, setNavClass] = useState(
    pathname === '/' ? 'bg-transparent' : notHomeNavClass
  )
  const { navMenu, userMenu } = menu

  const handleNavPositionChange = useCallback((position: number) => {
    position > 100
      ? setNavClass(
          'bg-gradient-to-bl from-pink-500/50 via-purple-500/50 to-teal-500/50 shadow-lg'
        )
      : setNavClass(pathname === '/' ? 'bg-transparent' : notHomeNavClass)
  }, [])

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      onScrollPositionChange={handleNavPositionChange}
      maxWidth="xl"
      classNames={{
        base: `flex z-40 w-full h-auto items-center justify-center 
        data-[menu-open=true]:border-none sticky top-0 
        inset-x-0 dark backdrop-saturate-100
        backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl ${navClass}`,
      }}
    >
      <NavbarContent>
        {/* authoorization check for TRIGGER mobile menu */}
        {session && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-foreground"
          />
        )}
        <NavbarBrand className="stroke-foreground text-foreground">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      {/* authoorization check for DESKTOP menu */}
      {session && (
        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {navMenu.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.url}
                className={pathname === item.url ? 'opacity-75' : ''}
              >
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
      {/* authoorization check for MOBILE menu */}
      {session && (
        <NavbarMenu>
          {navMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={pathname === item.url ? 'primary' : 'foreground'}
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
