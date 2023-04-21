import AddIcon from '@mui/icons-material/Add'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {
  ExploreIcon,
  FollowIcon,
  LibraryIcon,
  NewSongsIcon,
  RadioIcon,
  ThemeAndCategoryIcon,
  Top100Icon,
  ZingChartIcon,
  ZingLogo
} from '~/assets/svgs'
import MVIcon from '~/assets/svgs/mvIcon'
import { DRAWER_WIDTH } from '~/commons/constants'
import { Box, Button, Divider, Typography } from '~/elements'
import { BUTTON_STYLES } from '~/elements/button'
import { DIVIDER_STYLES } from '~/elements/divider'
import Colors from '~/styles/colors.json'
import { convertToRem } from '~/utils/styleUtils'
import styles from './sidebar.module.scss'
import { SideBarProps } from './sidebar.type'

const SidebarMenuData = [
  {
    title: 'library',
    icon: <LibraryIcon />
  },
  {
    title: 'explore',
    icon: <ExploreIcon />
  },
  {
    title: 'zingChart',
    icon: <ZingChartIcon />
  },
  {
    title: 'radio',
    icon: <RadioIcon />
  },
  {
    title: 'follow',
    icon: <FollowIcon />
  }
]

const SidebarMenuData_2 = [
  {
    title: 'newSongs',
    icon: <NewSongsIcon />
  },
  {
    title: 'themeAndCategory',
    icon: <ThemeAndCategoryIcon />
  },
  {
    title: 'top100',
    icon: <Top100Icon />
  },
  {
    title: 'mv',
    icon: <MVIcon />
  }
]

const Sidebar = ({ handleDrawerToggle, mobileOpen }: SideBarProps) => {
  const drawer = (
    <Box className={styles.drawer_cotainer}>
      <Box>
        <Box className={styles.logo_box}>
          <ZingLogo />
        </Box>
        <List className={styles.drawer}>
          {SidebarMenuData.map((i, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography bold="2xl" size="2sm">
                      {i.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box p={`0 ${convertToRem(25)}`}>
          <Divider defaultStyle={DIVIDER_STYLES.GREY_001} />
        </Box>
        <List className={styles.drawer}>
          {SidebarMenuData_2.map((i, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography bold="2xl" size="2sm">
                      {i.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Button sx={{ borderTop: `1px solid ${Colors.grey_001}` }} defaultStyle={BUTTON_STYLES.WHITE_COLOR}>
          <AddIcon />
          &ensp;
          <Typography sx={{ mr: 4 }} bold="2xl" size="md" tAlign="center">
            createNewPlayList
          </Typography>
        </Button>
      </Box>
    </Box>
  )
  return (
    <Box className={styles.sidebar_container}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
