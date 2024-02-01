export async function fetchServerData(endpoint: string) {
  try {
    const res = await fetch(endpoint)

    if (!res.ok) {
      throw new Error('Failed to fetch data at [fetchServerData]')
    }
    return res.json()
  } catch (error) {
    console.error(error)
  }
}
