import globalConfigJs from 'global.json'
import { atom } from 'recoil'
import { ATOM_KEYS } from '~/commons/constants'

export const globalConfig = atom<typeof globalConfigJs>({
  key: ATOM_KEYS.GLOBAL_CONFIG,
  default: globalConfigJs
})
