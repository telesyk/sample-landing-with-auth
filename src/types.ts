export type HeadingType = 'xl' | 'lg' | 'md'

export type SectionType = {
  title: string
  subtitle?: string
  content?: string
  imageSrc?: string
  preloadImageSrc?: string
}

export type MenuItemType = {
  title: string
  url: string
}

export type SubscriptionItemType = {
  price: string
  title?: string
  subtitle?: string
  benefits?: string[]
}

export type AdditionalInfoType = {
  location?: string
  subscription?: SubscriptionItemType
}

export type SubscriptionType = {
  free: SubscriptionItemType
  professional: SubscriptionItemType
  business: SubscriptionItemType
}
