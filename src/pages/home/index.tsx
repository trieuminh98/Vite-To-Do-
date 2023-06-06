import { Box, Grid } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import defaultImage4 from '~/assets/imgs/test_2.jpeg'
import defaultImage3 from '~/assets/imgs/test_3.jpeg'
import defaultImage2 from '~/assets/imgs/test_4.jpeg'
import defaultImage from '~/assets/imgs/test_5.jpeg'
import { songInfos } from '~/commons/mocks'
import { SongInfo } from '~/commons/types.type'
import Playlist from '~/components/playlist'
import { Button, Typography } from '~/elements'
import ButtonWithArrowFoward from '~/elements/button/buttonWithArrowFoward'
import Colors from '~/styles/colors.json'
import styles from './home.module.scss'
import MediaBox from './mediaBox'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const HomePage = () => {
  return (
    <>
      <Box className={styles.carousel} sx={{ width: '100%' }}>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
        >
          <Box className={styles.carousel_img}>
            <Box component={'img'} src={defaultImage} />
          </Box>
          <Box className={styles.carousel_img}>
            <Box component={'img'} src={defaultImage2} />
          </Box>
          <Box className={styles.carousel_img}>
            <Box component={'img'} src={defaultImage3} />
          </Box>
          <Box className={styles.carousel_img}>
            <Box component={'img'} src={defaultImage4} />
          </Box>
        </Carousel>
      </Box>
      <Box mt={2} className={styles.new_release}>
        <Typography size="xl" bold="2xl">
          newRelease
        </Typography>
        <Box pt={2} display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} gap={2} justifyContent={'flex-start'}>
            <Button defaultStyle="ZM_SELECTED" className={styles.filter_btn}>
              <Typography bold="md" size="sm">
                TẤT CẢ
              </Typography>
            </Button>
            <Button
              sx={{
                borderRadius: '100px',
                border: `1px solid ${Colors.alpha}`
              }}
              defaultStyle="ZM_UNSELECTED"
              className={styles.filter_btn}
            >
              <Typography bold="md" size="sm">
                VIỆT NAM
              </Typography>
            </Button>
            <Button
              sx={{
                borderRadius: '100px',
                border: `1px solid ${Colors.alpha}`
              }}
              defaultStyle="ZM_UNSELECTED"
              className={styles.filter_btn}
            >
              <Typography bold="md" size="sm">
                QUỐC TẾ
              </Typography>
            </Button>
          </Box>
          <ButtonWithArrowFoward />
        </Box>
        <Grid mt={2} container spacing={2}>
          {songInfos.map((songInfo: SongInfo) => (
            <Grid key={songInfo.id} item xs={6} lg={4}>
              <MediaBox {...{ songInfo }} />
            </Grid>
          ))}
        </Grid>
        <Box mt={6}>
          <Playlist img={defaultImage2} title="chill" description="Thả mình cùng những giai điệu V-Pop nhẹ nhàng" />
        </Box>
      </Box>
    </>
  )
}

export default HomePage
