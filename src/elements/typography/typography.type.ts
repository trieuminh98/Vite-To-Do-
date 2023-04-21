import { TypographyProps as MTypographyProps } from '@mui/material'
import { ElementType } from 'react'
import { CSSTextStyles } from '~/commons/types.type'

export type TypographyProps = MTypographyProps &
  CSSTextStyles & {
    component?: ElementType
  }
