import { ButtonProps as MButtonProps } from '@mui/material'
import Tooltip, { TooltipProps } from '@mui/material/Tooltip'
import { styledButton } from './styled'

export type ButtonProps = MButtonProps & {
  defaultStyle?: keyof typeof styledButton
  isShowTooltip?: boolean
  tooltipProps?: TooltipProps
}

const Button = ({
  children,
  defaultStyle,
  isShowTooltip = false,
  tooltipProps = {} as TooltipProps,
  id,
  ...rest
}: ButtonProps) => {
  const AddToolTip = ({ children, id, ...rest }: any) => {
    const { title = '', placement = 'top' } = tooltipProps
    return isShowTooltip ? (
      <Tooltip id={id} {...tooltipProps} title={title} placement={placement}>
        {children}
      </Tooltip>
    ) : (
      children
    )
  }

  const Component = defaultStyle ? styledButton[defaultStyle] : styledButton['DEFAULT']
  return (
    <>
      <Component id={id} {...rest}>
        <AddToolTip id={id}>{children}</AddToolTip>
      </Component>
    </>
  )
}

export default Button
