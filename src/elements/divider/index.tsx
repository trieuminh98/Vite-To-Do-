import { Divider as MDivider, DividerProps as MDividerProps } from '@mui/material'

export type DividerProps = MDividerProps & {}

const Divider = ({ children, ...rest }: DividerProps) => {
  return <MDivider {...rest}>{children}</MDivider>
}

export default Divider
