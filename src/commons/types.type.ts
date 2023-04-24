import { defaultNS, resources } from '~/services/i18n/config'
import Colors from '~/styles/colors.json'
import { FONT_SIZE, FONT_WEIGHT } from './constants'

export type LangResources = typeof resources

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
  }
}

type FontSizeKeys = keyof typeof FONT_SIZE
type FontWeightKeys = keyof typeof FONT_WEIGHT
export type CSSTextStyles = {
  bold?: FontWeightKeys
  size?: FontSizeKeys
  lHeight?: number | string
  lSpacing?: number | string
  color?: keyof typeof Colors
}
