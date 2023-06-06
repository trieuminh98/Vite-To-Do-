import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated'
import DiamondIcon from '@mui/icons-material/Diamond'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import { Box, Toolbar, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DRAWER_WIDTH, DRAWER_WIDTH_2 } from '~/commons/constants'
import { Button, IconButton, Input, Typography } from '~/elements'
import theme from '~/styles/theme'
import styles from './header.module.scss'

const Header = () => {
  const xsMatches = useMediaQuery(theme.breakpoints.down('md'))
  const { t } = useTranslation()

  return (
    <Toolbar className={styles.header}>
      <Box className={styles.header_container} sx={{ paddingLeft: `${xsMatches ? DRAWER_WIDTH_2 : DRAWER_WIDTH}px` }}>
        <Box className={styles.flex_box}>
          <IconButton className={styles.navigate_btn}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton className={styles.navigate_btn}>
            <ArrowForwardIcon />
          </IconButton>
          <Input
            className={styles.search_input}
            startAdornment={<SearchIcon />}
            placeholder={t('searchPlaceholder')!}
          />
        </Box>
        <Box className={styles.flex_box}>
          <IconButton className={styles.download_btn} defaultStyle={'GREY_BG'}>
            <BrowserUpdatedIcon />
            <Typography ml={0.5} bold="xl">
              downloadMacOSVersion
            </Typography>
          </IconButton>
          <IconButton className={styles.icon_btn} defaultStyle={'GREY_BG'}>
            <DiamondIcon />
          </IconButton>
          <IconButton className={styles.icon_btn} defaultStyle={'GREY_BG'}>
            <SettingsIcon />
          </IconButton>
          <Button className={styles.login_btn} defaultStyle="PURPLE">
            <Typography bold="xl" lineHeight={20}>
              login
            </Typography>
          </Button>
        </Box>
      </Box>
    </Toolbar>
  )
}

export default Header
