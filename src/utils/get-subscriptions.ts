import { fetchServerData } from '.'

export async function getSubscriptions(): Promise<string[] | undefined> {
  try {
    const data = await fetchServerData()
    const subscriptions = Object.keys(data.global?.subscription)

    return subscriptions
  } catch (error) {
    console.error(error)
  }
}

export async function getSubscription(subscription: string | undefined) {
  if (!subscription) return

  try {
    const data = await fetchServerData()
    const details = data.global?.subscription[subscription]

    return {
      ...details,
      name: subscription,
    }
  } catch (error) {
    console.error(error)
  }
}
