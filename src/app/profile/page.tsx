import { ProfileProvider, ProfileAbout } from '@/components'
import { fetchServerData } from '@/utils'

export default async function Profile() {
  const data = await fetchServerData()

  const {
    global: { subscription },
    pages: { profile },
  } = data

  return (
    <ProfileProvider data={{ profile, subscription }}>
      <ProfileAbout />
    </ProfileProvider>
  )
}
