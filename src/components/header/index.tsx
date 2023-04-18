import { Toolbar } from '@mui/material'
import { IconButton, Typography } from '~/elements'
import { HeaderProps } from './header.type'

const Header = ({ handleDrawerToggle }: HeaderProps) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        zzz
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Responsive drawer
      </Typography>
    </Toolbar>
  )
}

export default Header
