import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LANG } from '~/commons/constants'
import { en } from './lang/en'
import { vi } from './lang/vi'

export const defaultNS = LANG.VI

export const resources = {
  en,
  vi
} as const

i18next.use(initReactI18next).init({
  lng: LANG.VI, // if you're using a language detector, do not define the lng option
  debug: true,
  // ns: [LANG.VI, LANG.EN],
  resources
  // defaultNS
})
