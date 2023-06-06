import { IconButtonProps as MIconButtonProps } from '@mui/material'
import { styledIconButton } from './styled'

export type ButtonProps = MIconButtonProps & {
  defaultStyle?: keyof typeof styledIconButton
}

const IconButton = ({ children, defaultStyle, ...rest }: ButtonProps) => {
  const Component = defaultStyle ? styledIconButton[defaultStyle] : styledIconButton['DEFAULT']
  return <Component {...rest}>{children}</Component>
}

export default IconButton
