export const convertToRem = (value: string | number) => {
  if (typeof value === 'string') {
    return value
  }
  if (value && isNaN(value) === false) {
    return value / 16 + 'rem'
  }
  return value
}
