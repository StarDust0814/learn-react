import Login from '../page/Login';
import Article from '../page/Article';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    // 传递参数的时候，占位符id会被参数值代替
    // 传递多个参数的时候，直接接在后面
    path: '/article/:id/:name',
    element: <Article />,
  },
]);

export default router;
