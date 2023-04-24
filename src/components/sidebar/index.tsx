import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  CSSObject,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { useState } from 'react'
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
import ZingLogoSimple from '~/assets/svgs/zingLogoSimple'
import { Box, Button, Divider, IconButton, Typography } from '~/elements'
import { BUTTON_STYLES } from '~/elements/button'
import { DIVIDER_STYLES } from '~/elements/divider'
import Colors from '~/styles/colors.json'
import { convertToRem } from '~/utils/styleUtils'
import styles from './sidebar.module.scss'

type SidebarMenuDataType = {
  id: number
  title: string
  icon: JSX.Element
}

const drawerWidth = 240

const SidebarMenuData = [
  {
    id: 1,
    title: 'library',
    icon: <LibraryIcon />
  },
  {
    id: 2,
    title: 'explore',
    icon: <ExploreIcon />
  },
  {
    id: 3,
    title: 'zingChart',
    icon: <ZingChartIcon />
  },
  {
    id: 4,
    title: 'radio',
    icon: <RadioIcon />
  },
  {
    id: 5,
    title: 'follow',
    icon: <FollowIcon />
  }
] as SidebarMenuDataType[]

const SidebarMenuData_2 = [
  {
    id: 6,
    title: 'newSongs',
    icon: <NewSongsIcon />
  },
  {
    id: 7,
    title: 'themeAndCategory',
    icon: <ThemeAndCategoryIcon />
  },
  {
    id: 8,
    title: 'top100',
    icon: <Top100Icon />
  },
  {
    id: 9,
    title: 'mv',
    icon: <MVIcon />
  }
] as SidebarMenuDataType[]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const Sidebar = () => {
  const [curTab, setCurTab] = useState(1)
  const theme = useTheme()
  const xsMatches = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(xsMatches ? false : true)

  const CustomListItem = ({ id, icon, title }: SidebarMenuDataType) => {
    return (
      <ListItem className={curTab === id ? styles.selected_tab : ''} disablePadding>
        <ListItemButton sx={{ justifyContent: open ? 'initial' : 'center' }} onClick={() => setCurTab(id)}>
          <ListItemIcon
            sx={{
              minWidth: 0
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            sx={{ display: open ? 'block' : 'none', marginLeft: 1.5 }}
            primary={
              <Typography bold="2xl" size="2sm">
                {title}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    )
  }

  const ExpandBtn = () => (
    <Button className={styles.btn_expanded} onClick={() => setOpen(pre => !pre)}>
      {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </Button>
  )

  const drawer = (
    <Box className={styles.drawer_cotainer}>
      <Box>
        <Box className={open ? styles.logo_box : ''}>
          <IconButton onClick={() => console.log('hello')}>{!open ? <ZingLogoSimple /> : <ZingLogo />}</IconButton>
        </Box>
        <List className={styles.drawer}>
          {SidebarMenuData.map((i, _index) => (
            <CustomListItem key={i.id} {...i} />
          ))}
        </List>
        <Box p={`0 ${convertToRem(25)}`}>
          <Divider defaultStyle={DIVIDER_STYLES.GREY_001} />
        </Box>
        <List className={styles.drawer}>
          {SidebarMenuData_2.map((i, index) => (
            <CustomListItem key={i.id} {...i} />
          ))}
        </List>
      </Box>
      <Box className={xsMatches ? styles.btn_expanded_container : ''}>
        {xsMatches ? (
          <>
            {open && (
              <Button sx={{ width: 'auto', ml: 0.25 }} defaultStyle={BUTTON_STYLES.TRANSPARENT}>
                <AddIcon />
                &ensp;
                <Typography sx={{ mr: 2.5 }} bold="2xl" size="md" align="center">
                  createNewPlayList
                </Typography>
              </Button>
            )}
            <ExpandBtn />
          </>
        ) : (
          <Button sx={{ borderTop: `1px solid ${Colors.grey_001}` }} defaultStyle={BUTTON_STYLES.TRANSPARENT}>
            <AddIcon />
            &ensp;
            <Typography sx={{ mr: 4 }} bold="2xl" size="md" align="center">
              createNewPlayList
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  )
  return (
    <Box className={styles.sidebar_container}>
      <Drawer variant="permanent" open={open}>
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
