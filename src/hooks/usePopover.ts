import { useState } from 'react'

export const usePopover = (id: string | number) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const popoverId = `popover-${id}`
  const onOpenPopver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClosePopover = () => {
    setAnchorEl(null)
  }

  return { anchorEl, popoverId, onOpenPopver, onClosePopover, setAnchorEl, open: Boolean(anchorEl) }
}
