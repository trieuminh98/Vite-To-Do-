import { useRoutes } from 'react-router-dom'
import { PATH } from '~/commons/constants'
import LoginPage from '~/pages/login'
import TodoPage from '~/pages/todo'
import Wrapper from './Wrapper'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Wrapper />,
      children: [
        {
          path: PATH.LOGIN,
          element: <LoginPage />
        },
        {
          path: PATH.TODO,
          element: <TodoPage />
        },
        {
          path: '/',
          element: <LoginPage />
        }
      ]
    }
  ])
  return routes
}

export default Routes
