import { FONT_SIZE, FONT_WEIGHT } from '~/commons/constants'
import { CSSTextStyles } from '~/commons/types.type'
import Colors from '~/styles/colors.json'

export const convertToRem = (value: string | number) => {
  if (typeof value === 'string') {
    return value
  }
  if (value && isNaN(value) === false) {
    return value / 16 + 'rem'
  }
  return value
}

export const generateTextStyles = (obj: CSSTextStyles & { [k: string]: any }) => {
  const { bold = 'md', size = 'md', lHeight = '', lSpacing = '', tAlign = 'left', color = 'white' } = obj
  return {
    fontWeight: FONT_WEIGHT[bold] || undefined,
    size: convertToRem(FONT_SIZE[size]),
    lineHeight: convertToRem(lHeight),
    letterSpacing: convertToRem(lSpacing),
    textAlign: tAlign,
    color: color || Colors[color]
  }
}
