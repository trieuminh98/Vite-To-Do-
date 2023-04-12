import { Box as MBox, BoxProps as MBoxProps } from '@mui/material'

export type BoxProps = MBoxProps & {}

const Box = ({ children, ...rest }: BoxProps) => {
  return <MBox {...rest}>children</MBox>
}

export default Box
