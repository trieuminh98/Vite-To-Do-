import { useCallback, useState } from 'react'

export const usePopover = (id: string | number) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [popoverId, _setPopoverId] = useState(`popover-${id}`)

  const onOpenPopver = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const onClosePopover = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return { anchorEl, popoverId, onOpenPopver, onClosePopover, setAnchorEl, open: Boolean(anchorEl) }
}
