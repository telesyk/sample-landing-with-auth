'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from '@nextui-org/react'
import { Heading } from '..'
import { SubscriptionItemType } from '@/types'
import { CURRENCY_SIGN } from '@/constants'

interface PricingProps {
  details: SubscriptionItemType
  handleClick: (arg: string | undefined) => void
  image?: string
}

export default function PricingCard({
  details,
  handleClick,
  image = 'https://nextui.org/images/hero-card.jpeg',
}: PricingProps) {
  return (
    <Card className="py-4">
      <CardHeader className="my-2 px-4 flex-col items-center justify-center text-center">
        <Heading
          variation="md"
          subheading={details.subtitle ? details.subtitle : null}
          className="capitalize"
        >
          {details.title}
        </Heading>
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-5">
        {image && (
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={270}
          />
        )}
        <div className="text-center">
          <span className="font-bold">
            {details.price} {CURRENCY_SIGN}
          </span>
        </div>
        {details.benefits && (
          <div className="text-center space-y-2">
            {details.benefits.map((item: string) => (
              <p key={item} className="text-sm lg:text-base font-thin">
                {item}
              </p>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter>
        <Button
          variant="flat"
          size="lg"
          radius="full"
          className="w-full"
          color="primary"
          onClick={() => handleClick(details.title)}
        >
          Order now
        </Button>
      </CardFooter>
    </Card>
  )
}
