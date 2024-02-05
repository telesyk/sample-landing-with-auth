import { CompanyProvider, CompanyAbout, CompanySubscribe } from '@/components'
import { MOCK_ENDPOINT } from '@/constants'
import { fetchServerData } from '@/utils'

export default async function Company() {
  const data = await fetchServerData(MOCK_ENDPOINT)
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
