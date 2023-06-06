import { Popover as MPopover, PopoverProps as MPopoverProps } from '@mui/material'
import { ReactNode } from 'react'

type PopoverProps = {
  open: boolean
  onClosePopover: () => void
  popoverProps?: MPopoverProps
  children: ReactNode
  id: string
}

const Popover = ({ open, onClosePopover, popoverProps = {} as MPopoverProps, children, id }: PopoverProps) => {
  const {
    open: _open,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    ...rest
  } = popoverProps
  return (
    <MPopover
      id={id}
      onClose={() => onClosePopover()}
      open={open}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...rest}
    >
      {children}
    </MPopover>
  )
}

export default Popover
