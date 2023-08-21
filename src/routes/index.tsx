import lazyLoad from '@/components/Lazy'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

let routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      {
        name: 'about',
        path: '/platform',
        element: lazyLoad('../pages/platform')
      }
    ]

  },
  { path: '/login', element: <Login /> },
  // { path: '*', element: <NotFound /> }
]

export default routes
