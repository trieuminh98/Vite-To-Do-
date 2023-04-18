import { useRoutes } from 'react-router-dom'
import Home from '~/pages/home'
import Layout from './Layout'
import Wrapper from './Wrapper'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Wrapper />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />
            }
          ]
        }
      ]
    }
  ])
  return routes
}

export default Routes
