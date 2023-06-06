import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '~/components'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ background: 'transparent', boxShadow: 'none' }} position="fixed">
        <Header />
      </AppBar>
      <Box zIndex={1203} component="nav" aria-label="side bar">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Sidebar />
      </Box>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '75%'
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
