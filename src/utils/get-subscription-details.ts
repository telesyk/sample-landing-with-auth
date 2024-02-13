import { SubscriptionItemType } from '@/types'

export default function getSubscriptionDetails(
  array: SubscriptionItemType[],
  title?: string | undefined
): SubscriptionItemType | undefined {
  return array.find(item => {
    const typeTitle = !title ? 'free' : title
    return item.title === typeTitle
  })
}
