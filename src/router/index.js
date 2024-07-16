import Login from '../page/Login';
import Article from '../page/Article';

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../page/Layout';
import Board from '../page/Board';
import About from '../page/About';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
  {
    path: '/router',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Board></Board>,
      },
      { path: 'about', element: <About></About> },
    ],
  },
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
  { path: '*', element: <NotFound></NotFound> },
]);

export default router;
