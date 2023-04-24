import { Toolbar } from '@mui/material'
import { IconButton } from '~/elements'

const Header = ({ open, handleDrawerOpen }: any) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{
          marginRight: 5
          // ...(open && { display: 'none' })
        }}
      >
        xxx
      </IconButton>
    </Toolbar>
  )
}

export default Header
