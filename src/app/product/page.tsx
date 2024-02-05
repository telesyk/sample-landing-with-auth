import { ProductProvider, ProductAbout, ProductSubscribe } from '@/components'
import { MOCK_ENDPOINT } from '@/constants'
import { fetchServerData } from '@/utils'

export default async function Product() {
  const data = await fetchServerData(MOCK_ENDPOINT)
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
