import { MOCK_ENDPOINT } from '@/constants'

export async function fetchServerData() {
  try {
    const res = await fetch(MOCK_ENDPOINT, {
      cache: process.env.NODE_ENV ? 'no-store' : 'force-cache',
    }) /* while DEV mode */

    if (!res.ok) {
      throw new Error('Failed to fetch data at [fetchServerData]')
    }
    return res.json()
  } catch (error) {
    console.error(error)
  }
}
