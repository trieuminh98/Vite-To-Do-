import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Box, PopoverProps, TooltipProps } from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import { SongInfo } from '~/commons/types.type'
import SongMenu from '~/components/songMenu'
import { Button, Popover, Typography } from '~/elements'
import { usePopover } from '~/hooks/usePopover'
import styles from './mediaBox.module.scss'

type MediaBoxProps = {
  songInfo: SongInfo
}

const MediaBox = ({ songInfo }: MediaBoxProps) => {
  const { anchorEl, popoverId, onOpenPopver, onClosePopover, open: open } = usePopover(songInfo.id)
  return (
    <Box className={styles.media_box} display={'flex'} gap={2} justifyContent={'space-between'}>
      <Box display={'flex'} gap={2}>
        <Button sx={{ position: 'relative' }}>
          <PlayArrowIcon className={styles.play_icon} />
          <Box sx={{ borderRadius: '4px' }} component={'img'} src={songInfo.img} height={'60px'} width={'60px'} />
        </Button>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Typography bold="md" size="md">
            {songInfo.songName || ''}
          </Typography>
          <Box className={styles.author_link} component={'a'} href="ldgladglad">
            <Typography color="text-secondary" bold="md" size="sm" lHeight={1.33}>
              {songInfo.author || ''}
            </Typography>
          </Box>
          <Typography color="text-secondary" bold="md" size="sm" lHeight={1.33}>
            {songInfo.publicDay || ''}
          </Typography>
        </Box>
      </Box>
      <Button
        id={popoverId}
        onClick={onOpenPopver}
        className={styles.more_btn}
        isShowTooltip
        tooltipProps={{ title: 'Khác' } as TooltipProps}
      >
        <MoreHorizIcon className={styles.more_horiz_icon} />
      </Button>
      <Popover id={popoverId} open={open} {...{ onClosePopover }} popoverProps={{ anchorEl } as PopoverProps}>
        <SongMenu {...{ songInfo }} />
      </Popover>
    </Box>
  )
}

export default MediaBox
