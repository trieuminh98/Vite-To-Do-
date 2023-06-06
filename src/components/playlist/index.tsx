import { Box } from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import { Typography } from '~/elements'

type PlaylistProps = {
  title: string
  img: string
  description: string
}

const MAX_DIMESION = '203.75px'

const Playlist = ({ title = '', img, description }: PlaylistProps) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Box>
        <Box maxHeight={MAX_DIMESION} maxWidth={MAX_DIMESION} component={'img'} src={img} alt="default" />
        <Typography>{description}</Typography>
      </Box>
    </Box>
  )
}

export default Playlist
