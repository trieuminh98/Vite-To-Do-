import BlockIcon from '@mui/icons-material/Block'
import DownloadIcon from '@mui/icons-material/Download'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import ReplyIcon from '@mui/icons-material/Reply'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { Box, PopoverProps } from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import { SongInfo } from '~/commons/types.type'
import { Button, Popover, Typography } from '~/elements'
import { usePopover } from '~/hooks/usePopover'
import Colors from '~/styles/colors.json'
import styles from './songMenu.module.scss'
type SongMenuProps = {
  songInfo: SongInfo
}

const SongMenu = ({ songInfo }: SongMenuProps) => {
  const { anchorEl, popoverId, onOpenPopver, onClosePopover, open: open } = usePopover(`sub-${songInfo.id}`)
  return (
    <Box
      p={1}
      display={'flex'}
      gap={1}
      flexDirection={'column'}
      bgcolor={Colors['layout-bg']}
      className={styles.song_menu}
    >
      <Box display="flex" gap={1}>
        <Box sx={{ borderRadius: '4px' }} component={'img'} src={songInfo.img} height={'40px'} width={'40px'} />
        <Box display="flex" flexDirection={'column'} justifyContent={'space-around'}>
          <Button onMouseEnter={onOpenPopver} onMouseLeave={onClosePopover}>
            <Typography>{songInfo.songName}</Typography>
          </Button>
          <Popover
            id={popoverId}
            open={open}
            {...{ onClosePopover }}
            popoverProps={
              {
                anchorEl,
                disableEnforceFocus: true,
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                }
              } as PopoverProps
            }
          >
            <SongMenu {...{ songInfo }} />
          </Popover>
          <Typography>{songInfo.author}</Typography>
        </Box>
      </Box>
      <Box className={styles.group_btn}>
        <Button>
          <Typography bold="md" size="sm">
            <Box>
              <DownloadIcon />
            </Box>
            Tải xuống
          </Typography>
        </Button>
        <Button>
          <Typography bold="md" size="sm">
            <Box>
              <InterpreterModeIcon />
            </Box>
            Lời bài hát
          </Typography>
        </Button>
        <Button>
          <Typography bold="md" size="sm">
            <Box>
              <BlockIcon />
            </Box>
            Chặn
          </Typography>
        </Button>
      </Box>
      <Box className={styles.menu}>
        <FavoriteBorderIcon />
        <Typography>Thêm vào thư viện</Typography>
      </Box>
      <Box className={styles.menu}>
        <PlaylistAddIcon />
        <Typography>Thêm vào danh sách phát</Typography>
      </Box>
      <Box className={styles.menu}>
        <SkipNextIcon />
        <Typography>Phát tiếp theo</Typography>
      </Box>
      <Box className={styles.menu}>
        <LibraryAddIcon />
        <Typography>Thêm vào playlist</Typography>
      </Box>
      <Box className={styles.menu}>
        <InsertLinkIcon />
        <Typography>Sao chép link</Typography>
      </Box>
      <Box className={styles.menu}>
        <ReplyIcon />
        <Typography>Chia sẻ</Typography>
      </Box>
    </Box>
  )
}

export default SongMenu
