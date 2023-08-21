import { Outlet, Link } from 'react-router-dom'

const navs = [
  { name: '首页', path: '/' },
  { name: '平台模型库', path: '/platformModel' },
  { name: '我的模型库', path: '/myModel' },
  { name: '自定义模型库', path: '/customModel' },
  { name: '自定义配置', path: '/config' }
]
export default () => {
  return (
    <div>
      {
        navs.map((item, index) => (
          <Link to={item.path} key={index}> {item.name}</Link>
        ))
      }
      <Outlet />
    </div>)
}