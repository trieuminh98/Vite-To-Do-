import { Divider as MDivider, DividerProps as MDividerProps } from '@mui/material'
import { concatenateStr } from '~/utils/stringUtils'
import styles from './divider.module.scss'

export enum DIVIDER_STYLES {
  GREY_001 = 'GREY_001'
}

export type DividerProps = MDividerProps & {
  defaultStyle?: keyof typeof DIVIDER_STYLES
}

const Divider = ({ children, defaultStyle, className: customClassName, ...rest }: DividerProps) => {
  return (
    <MDivider
      className={concatenateStr(
        styles.init,
        defaultStyle ? styles[defaultStyle.toLocaleLowerCase()] : '',
        customClassName || ''
      )}
      {...rest}
    >
      {children}
    </MDivider>
  )
}

export default Divider
