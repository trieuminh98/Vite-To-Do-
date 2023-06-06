import { Box } from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import styles from './SongInfo.module.scss'
type SongInfoProps = {
  img: string
  author: string
  songName: string
}

const SongInfo = ({ img, author, songName }: SongInfoProps) => {
  return <Box className={styles.menu}>hello</Box>
}

export default SongInfo
