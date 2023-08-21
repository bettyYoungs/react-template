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
        name: 'platformModel',
        path: '/platformModel',
        element: lazyLoad('../pages/Platform')
      },
      {
        name: 'about',
        path: '/myModel',
        element: lazyLoad('../pages/MyModel')
      },
      {
        name: 'customModel',
        path: '/customModel',
        element: lazyLoad('../pages/CustomModel')
      },
      {
        name: 'config',
        path: '/config',
        element: lazyLoad('../pages/Config')
      }
    ]

  },
  { path: '/login', element: <Login /> },
  // { path: '*', element: <NotFound /> }
]

export default routes
