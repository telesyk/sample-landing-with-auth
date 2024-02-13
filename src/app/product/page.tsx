import { ProductProvider, ProductAbout, Subscribe } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product | Landing with Next-Auth',
}

export default async function Product() {
  const data = await fetchServerData()
  const {
    pages: { product },
    global: { subscribe },
  } = data

  return (
    <ProductProvider data={product}>
      <ProductAbout />
      <Subscribe subscribe={subscribe} />
    </ProductProvider>
  )
}
