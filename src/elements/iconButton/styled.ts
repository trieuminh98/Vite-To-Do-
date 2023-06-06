import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import Colors from '~/styles/colors.json'

const INIT = {
  padding: 0
}

export const styledIconButton = {
  DEFAULT: styled(IconButton)(() => ({})),
  GREY_BG: styled(IconButton)(() => ({
    ...INIT,
    backgroundColor: Colors.alpha,
    color: Colors.purple_primary
  }))
}
