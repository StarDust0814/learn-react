import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      我是一级路由
      <Link to="/router">面板</Link>
      <Link to="/router/about">关于</Link>
      {/* 配置二级路由出口 */}
      <Outlet />
    </div>
  );
};
export default Layout;
