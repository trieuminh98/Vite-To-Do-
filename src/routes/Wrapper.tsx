import { Outlet } from 'react-router-dom'

const Wrapper = (props: any) => {
  console.log(props)
  return <Outlet />
}

export default Wrapper
