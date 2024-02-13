import {
  ProductProvider,
  ProductAbout,
  Subscribe,
  FeatureSection,
} from '@/components'
import { SectionType } from '@/types'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product | Landing with Next-Auth',
}

export default async function Product() {
  const data = await fetchServerData()
  const {
    pages: { product },
    global: { subscribe, features },
  } = data

  return (
    <ProductProvider data={product}>
      <ProductAbout />
      {features &&
        features.map((item: SectionType, index: number) => {
          const even = index / 2 === 0
          return even ? (
            <FeatureSection key={item.title} featureItem={item} />
          ) : (
            <FeatureSection
              key={item.title}
              featureItem={item}
              isReverseDirection
            />
          )
        })}
      <Subscribe subscribe={subscribe} />
    </ProductProvider>
  )
}
