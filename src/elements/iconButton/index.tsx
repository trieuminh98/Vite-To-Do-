import { IconButton as MIconButton, IconButtonProps as MIconButtonProps } from '@mui/material'

export type IconButtonProps = MIconButtonProps & {}

const IconButton = (props: IconButtonProps) => {
  return <MIconButton {...props} />
}

export default IconButton
