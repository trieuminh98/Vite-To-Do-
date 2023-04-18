import { OutlinedInput as MInput, InputProps as MInputProps } from '@mui/material'

export type InputProps = MInputProps & {}

const Input = (props: InputProps) => {
  return <MInput {...props} />
}

export default Input
