import { ProfileProvider, ProfileAbout } from '@/components'
import { MOCK_ENDPOINT } from '@/constants'
import { fetchServerData } from '@/utils'

export default async function Profile() {
  const data = await fetchServerData(MOCK_ENDPOINT)
  const {
    pages: { profile },
  } = data

  return (
    <ProfileProvider data={profile}>
      <ProfileAbout />
    </ProfileProvider>
  )
}
