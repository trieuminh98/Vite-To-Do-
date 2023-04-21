import { Button as MButton, ButtonProps as MButtonProps } from '@mui/material'
import { concatenateStr } from '~/utils/stringUtils'
import styles from './button.module.scss'

export enum BUTTON_STYLES {
  WHITE_COLOR = 'WHITE_COLOR'
}

export type ButtonProps = MButtonProps & {
  defaultStyle?: keyof typeof BUTTON_STYLES
}

const Button = ({ children, defaultStyle, className: customClassName, ...rest }: ButtonProps) => {
  return (
    <MButton
      className={concatenateStr(
        styles.init,
        defaultStyle ? styles[defaultStyle.toLocaleLowerCase()] : '',
        customClassName || ''
      )}
      {...rest}
    >
      {children}
    </MButton>
  )
}

export default Button
