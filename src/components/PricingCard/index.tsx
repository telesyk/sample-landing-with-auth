import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from '@nextui-org/react'

export default function PricingCard() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter>
        <Button variant="flat" size="lg" radius="full">
          Choose
        </Button>
      </CardFooter>
    </Card>
  )
}
