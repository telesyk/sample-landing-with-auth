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

export type AdditionalInfoType = {
  location?: string
  subscription?: string
}

export type SubscriptionItemType = {
  price: string
  title?: string
  subtitle?: string
  benefits?: string[]
}

export type SubscriptionType = {
  free: keyof string | SubscriptionItemType
  professional: keyof string | SubscriptionItemType
  business: keyof string | SubscriptionItemType
}
