import { CompanyProvider, CompanyAbout, Subscribe } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Company | Landing with Next-Auth',
}

export default async function Company() {
  const data = await fetchServerData()
  const {
    pages: { company },
    global: { subscribe },
  } = data

  return (
    <CompanyProvider data={company}>
      <CompanyAbout />
      <Subscribe subscribe={subscribe} />
    </CompanyProvider>
  )
}
