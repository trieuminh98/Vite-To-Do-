import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Typography from '~/elements/typography'
import Colors from '~/styles/colors.json'
import Button from '..'

type ButtonWithArrowFoward = {}

const ButtonWithArrowFoward = ({}: ButtonWithArrowFoward) => {
  return (
    <Button sx={{ color: Colors.white, opacity: 0.5 }} defaultStyle="TRANSPARENT">
      <Typography component={'span'} size="md" bold="lg">
        TẤT CẢ
      </Typography>
      <ArrowForwardIosIcon sx={{ height: '16px', width: '16px', ml: 1 }} />
    </Button>
  )
}

export default ButtonWithArrowFoward
