import { SectionType } from '@/types'
import { Heading, SectionContainer } from '..'
import { Button, Image } from '@nextui-org/react'

export default function FeatureSection({
  featureItem,
  isReverseDirection = false,
}: {
  featureItem: SectionType
  isReverseDirection?: boolean
}) {
  const { title, subtitle, imageSrc, preloadImageSrc } = featureItem

  return (
    <SectionContainer
      classNames={{
        base: 'overflow-hidden',
        container: `py-12 md:flex-row gap-8 md:justify-center md:items-center ${isReverseDirection ? 'md:flex-row-reverse' : ''}`,
      }}
    >
      <div
        className={`flex-auto md:basis-1/2 ${isReverseDirection ? 'lg:pr-unit-18' : 'lg:pl-unit-18'}`}
      >
        <Heading variation="md" subheading={subtitle}>
          {title}
        </Heading>
        <Button
          radius="full"
          color="warning"
          variant="ghost"
          className="mt-8 min-w-48"
        >
          Button
        </Button>
      </div>
      <div className="flex-auto md:basis-1/2">
        <Image
          width="auto"
          height={200}
          src={imageSrc}
          alt={title}
          className="min-w-72 sm:min-w-80 lg:min-w-[516px]"
        />
      </div>
    </SectionContainer>
  )
}
