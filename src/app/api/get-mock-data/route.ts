export async function GET(request: Request) {
  try {
    const { global, pages } = await import('@/json/MOCK_DATA.json')
    if (pages && global) {
      const body: object = { global, pages }
      const myOptions = { status: 200, statusText: 'MOCK_DATA loaded' }

      return new Response(JSON.stringify(body), myOptions)
    }
    throw new Error('Failed fetching MOCK_DATA')
  } catch (error) {
    console.error(error)
  }
}
