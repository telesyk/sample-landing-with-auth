import { CompanyProvider, CompanyAbout, CompanySubscribe } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Company | Landing with Next-Auth',
}

export default async function Company() {
  const data = await fetchServerData()
  const {
    pages: { company },
  } = data

  return (
    <CompanyProvider data={company}>
      <CompanyAbout />
      <CompanySubscribe />
    </CompanyProvider>
  )
}
