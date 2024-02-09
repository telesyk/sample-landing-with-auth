import { ProductProvider, ProductAbout, ProductSubscribe } from '@/components'
import { fetchServerData } from '@/utils'

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
