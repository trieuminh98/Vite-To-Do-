import { Typography as MTypography, TypographyProps as MTypographyProps } from '@mui/material'
import { ElementType } from 'react'

export type TypographyProps = MTypographyProps & {
  component?: ElementType
}

const Typography = ({ children, component = 'p', ...rest }: TypographyProps) => {
  return (
    <MTypography component={component} {...rest}>
      {children}
    </MTypography>
  )
}

export default Typography
