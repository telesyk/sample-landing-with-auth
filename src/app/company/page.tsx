import { CompanyProvider, CompanyAbout, CompanySubscribe } from '@/components'
import { fetchServerData } from '@/utils'

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
