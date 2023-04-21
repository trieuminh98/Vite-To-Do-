import { Typography as MTypography } from '@mui/material'
import { isString } from 'lodash'
import { useTranslation } from 'react-i18next'
import { generateTextStyles } from '~/utils/styleUtils'
import { TypographyProps } from './typography.type'

const Typography = ({ children, component = 'p', sx: customSx = {}, ...rest }: TypographyProps) => {
  const { t } = useTranslation()
  return (
    <MTypography
      sx={{
        ...generateTextStyles(rest),
        ...customSx
      }}
      component={component}
      {...rest}
    >
      {isString(children) ? t(children) : children}
    </MTypography>
  )
}

export default Typography
