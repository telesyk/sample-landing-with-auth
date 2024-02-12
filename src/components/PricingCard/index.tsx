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
import { splitPriceValue } from '@/utils'

interface PricingProps {
  details: SubscriptionItemType
  handleClick: (arg: string | undefined) => void
  image?: string
  className?: string
}

export default function PricingCard({
  details,
  handleClick,
  image,
  className = '',
}: PricingProps) {
  const priceValues = splitPriceValue(details.price)

  return (
    <Card className={`light py-4 ${className}`}>
      <CardHeader className="my-2 px-4 flex-col items-center justify-center text-center">
        <Heading
          variation="md"
          subheading={details.subtitle ? details.subtitle : null}
          className="capitalize"
        >
          {details.title}
        </Heading>
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-6">
        {image && (
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={259}
            height={448}
            loading="lazy"
            fallbackSrc="./hero_preload.png"
          />
        )}
        <div className="flex gap-2 items-center justify-center">
          <div className="font-bold text-5xl text-teal-500">
            {CURRENCY_SIGN}
          </div>
          <div className="font-bold text-5xl text-teal-500">
            {priceValues[0]}
          </div>
          <div className="font-bold">
            <div className="text-2xl text-teal-500">
              .{priceValues[1] === 0 ? '00' : priceValues[1]}
            </div>
            <div className="text-xs">Per / month</div>
          </div>
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
