import { SectionType } from '@/types'
import { Heading, SectionContainer } from '..'
import { Image } from '@nextui-org/react'

export default function FeatureSection({
  featureItem,
  containerClasses = '',
}: {
  featureItem: SectionType
  containerClasses?: string
}) {
  const { title, subtitle, imageSrc, preloadImageSrc } = featureItem

  return (
    <SectionContainer
      classNames={{
        base: 'overflow-hidden',
        container: `py-12 md:flex-row gap-8 md:justify-center md:items-center ${containerClasses}`,
      }}
    >
      <header className="flex-auto md:basis-1/2">
        <Heading variation="md" subheading={subtitle}>
          {title}
        </Heading>
      </header>
      <div className="flex-auto md:basis-1/2">
        <Image
          width={200}
          height={200}
          src={imageSrc}
          alt={title}
          className="min-w-72 sm:min-w-80 md:min-w-[516px]"
        />
      </div>
    </SectionContainer>
  )
}
