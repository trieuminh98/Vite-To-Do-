import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Colors from '~/styles/colors.json'
import { convertToRem } from '~/utils/styleUtils'

const INIT = {
  padding: 0
}

const BaseStyledButton = styled(Button)(() => ({
  ...INIT
}))

const ZM_STYLES = {
  borderRadius: convertToRem(100),
  padding: `${convertToRem(4)} ${convertToRem(24)}`,
  textTransform: 'capitalize' as const
}

export const styledButton = {
  DEFAULT: styled(BaseStyledButton)(() => ({})),
  PURPLE: styled(BaseStyledButton)(() => ({
    backgroundColor: Colors.purple_primary,
    color: Colors.white
  })),
  ZM_SELECTED: styled(BaseStyledButton)(() => ({
    ...ZM_STYLES,
    backgroundColor: Colors.purple_primary,
    color: Colors.white,
    border: `1px solid ${Colors.alpha}`
  })),
  ZM_UNSELECTED: styled(BaseStyledButton)(() => ({
    ...ZM_STYLES,
    color: Colors.white,
    border: `1px solid ${Colors.alpha}`,
    ':hover': {
      color: Colors.alpha
    }
  })),
  TRANSPARENT: styled(BaseStyledButton)(() => ({
    color: Colors.white,
    svg: {
      fill: Colors.white
    }
  }))
}
