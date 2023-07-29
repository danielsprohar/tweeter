const tresCommas = 1_000_000_000
const million = 1_000_000
const thousand = 1_000

export default function abbreviateNumber(value: number): string {
  if (!Number.isSafeInteger(value)) {
    return ''
  }

  if (value > 999 && value < 10_000) {
    const thousands = Math.floor(value / thousand)
    const hundreds = value % thousand
    return `${thousands},${hundreds || '000'}`
  }

  let result = value / tresCommas
  if (result >= 100) {
    return `${result}B`
  }

  if (result >= 1 && result < 1_000) {
    return `${result}B`
  }

  result = value / million
  if (result >= 1 && result < 1_000) {
    return `${result}M`
  }

  result = value / thousand
  if (result >= 1 && result < 1_000) {
    return `${result}K`
  }

  return `${value}`
}
