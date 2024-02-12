export default function splitPriceValue(price: number | string): number[] {
  const stringArr = String(price).split('.')
  const splitedPrice = stringArr.map((item: string): number => Number(item))

  return splitedPrice
}
