'use client'

import { signIn, signOut } from 'next-auth/react'
import {
  NavbarContent,
  Button,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { FaUserCircle } from 'react-icons/fa'
import { Session } from 'next-auth'

export default function AuthButton({ session }: { session: Session | any }) {
  if (session)
    return (
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            {session.user?.image ? (
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                size="sm"
                src={session.user.image}
              />
            ) : (
              <FaUserCircle className="w-8 h-8 border-2 rounded-full p-0.5" />
            )}
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {session.user?.name && (
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user.name}</p>
              </DropdownItem>
            )}
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" onClick={() => signOut()} color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    )

  return (
    <Button
      radius="full"
      onClick={() => signIn()}
      color="secondary"
      variant="ghost"
      size="lg"
      className="min-w-[154px]"
    >
      Sign In
    </Button>
  )
}
