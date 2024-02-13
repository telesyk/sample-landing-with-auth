import { ProductProvider, ProductAbout, ProductSubscribe } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product | Landing with Next-Auth',
}

export default async function Product() {
  const data = await fetchServerData()
  const {
    pages: { product },
  } = data

  return (
    <ProductProvider data={product}>
      <ProductAbout />
      <ProductSubscribe />
    </ProductProvider>
  )
}
