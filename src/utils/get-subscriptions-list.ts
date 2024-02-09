import { SubscriptionItemType } from '@/types'

type ExceptionsType = string[] | null | undefined

export default function getSubscriptionsList(
  obj: Record<string, SubscriptionItemType>,
  exceptions?: ExceptionsType
): SubscriptionItemType[] {
  let newList: SubscriptionItemType[] = []

  for (const key in obj) {
    if (!exceptions?.includes(key)) {
      const newItem: SubscriptionItemType = {
        ...obj[key],
        title: key,
      }
      newList.push(newItem)
    }
  }

  return newList
}
