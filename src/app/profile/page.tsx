import { ProfileProvider, ProfileAbout } from '@/components'
import { fetchServerData } from '@/utils'

export default async function Profile() {
  const data = await fetchServerData()
  const {
    pages: { profile },
  } = data

  return (
    <ProfileProvider pageData={profile}>
      <ProfileAbout />
    </ProfileProvider>
  )
}
