export const numberFormatter = (number, currency = '') => {
  return currency + number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}

export const revertNumberFormatter = formattedNumber => {
  return formattedNumber.toString().replace(/[^0-9-]+/g, '')
}
