import { IconButton as MIconButton, IconButtonProps as MIconButtonProps } from '@mui/material'
import { concatenateStr } from '~/utils/stringUtils'
import styles from './iconButton.module.scss'

export enum ICON_BUTTON_STYLES {
  _DEFAULT = '_DEFAULT'
}

export type IconButtonProps = MIconButtonProps & {
  defaultStyle?: keyof typeof ICON_BUTTON_STYLES
}

const IconButton = ({ children, defaultStyle, className: customClassName, ...rest }: IconButtonProps) => {
  return (
    <MIconButton
      className={concatenateStr(
        styles.init,
        defaultStyle ? styles[defaultStyle.toLocaleLowerCase()] : '',
        customClassName || ''
      )}
      {...rest}
    >
      {children}
    </MIconButton>
  )
}

export default IconButton
