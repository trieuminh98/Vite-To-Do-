import { InputProps as MInputProps } from '@mui/material'
import { styledInput } from './styled'

export type InputProps = MInputProps & {
  defaultStyle?: keyof typeof styledInput
}

const Input = ({ defaultStyle, ...rest }: InputProps) => {
  const Component = defaultStyle ? styledInput[defaultStyle] : styledInput['DEFAULT']
  return <Component {...rest} />
}

export default Input
