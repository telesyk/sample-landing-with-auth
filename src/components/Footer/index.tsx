import React from 'react'
import { Image, Link } from '@nextui-org/react'
import { MenuItemType } from '@/types'
import { Container } from '..'
import {
  FaLocationDot,
  FaRegCopyright,
  FaPhone,
  FaRegEnvelope,
  FaMapLocationDot,
} from 'react-icons/fa6'

type FooterProps = {
  copyrights: string
  address?: {
    title: string
    link: string
    coverImage: string
  }
  contacts?: {
    phone: string
    email: string
  }
  links?: MenuItemType[]
}

export default function Footer({ data }: { data: FooterProps }) {
  const { links, contacts, address, copyrights } = data

  const renderMenu = () => {
    return (
      <nav className="columns-2 gap-x-4">
        {links?.map((item: MenuItemType) => (
          <Link
            key={item.title}
            className="w-full my-2 text-white hover:text-gray-100 transition-colors"
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <footer className="bg-primary-800 text-white">
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:basis-1/3">{links?.length && renderMenu()}</div>
          <div className="lg:basis-1/3">
            {address && (
              <Link
                isExternal
                href={address?.link}
                className="rounded-xl overflow-hidden"
              >
                <Image width={334} height={247} src={address?.coverImage} />
              </Link>
            )}
          </div>
          <div className="lg:basis-1/3 space-y-5">
            {address && (
              <div className="flex gap-4 items-center">
                <FaLocationDot className="w-7 h-7" />
                <span>{address.title}</span>
              </div>
            )}
            {contacts && (
              <>
                <div className="flex gap-4 items-center">
                  <FaPhone className="w-7 h-7" />
                  <span>{contacts.phone}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <FaRegEnvelope className="w-7 h-7" />
                  <span>{contacts.email}</span>
                </div>
              </>
            )}
            <div className="flex gap-4 items-center">
              <FaRegCopyright className="w-7 h-7" />
              <span>{copyrights}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
