import { SubscriptionItemType } from '@/types'

export default function getSubscriptionDetails(
  array: SubscriptionItemType[],
  title?: string | undefined
): SubscriptionItemType | undefined {
  const subscription = array.find(
    (item: SubscriptionItemType) => item.title === title || 'free'
  )

  return subscription
}
