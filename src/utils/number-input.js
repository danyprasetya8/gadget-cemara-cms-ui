export const numberInput = e => {
  e = e ? e : window.event

  const charCode = e.which ? e.which : e.keyCode

  const isCharacter = charCode > 31
  const isNonNumber = charCode < 48 || charCode > 57

  if (isCharacter && isNonNumber) {
    e.preventDefault()
    return
  }

  return true
}