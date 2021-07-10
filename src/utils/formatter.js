export const numberFormatter = (number, currency = '') => {
  return currency + number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}
