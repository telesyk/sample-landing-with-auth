export type HeadingType = 'xl' | 'lg' | 'md'

export interface SectionType {
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

export type SubscriptionType = 'free' | 'professional' | 'business'

export type SubscriptionsImagesType = {
  [key in SubscriptionType]: string
}

export type SubscriptionItemType = {
  price: string
  title: string
  subtitle?: string
  benefits?: string[]
  image?: string
}

export type AdditionalInfoType = {
  location?: string
  subscription?: SubscriptionItemType
}

export type SubscriptionsType = {
  [key in SubscriptionType]: SubscriptionItemType
}
