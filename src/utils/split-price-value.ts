export default function splitPriceValue(price: number | string): number[] {
  const stringArr = String(Number(price).toFixed(2)).split('.')
  const splitedPrice = stringArr.map((item: string): number => Number(item))

  return splitedPrice
}
