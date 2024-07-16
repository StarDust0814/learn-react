import { Link, useSearchParams } from 'react-router-dom';
const Login = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const name = params.get('name');
  return (
    <div>
      登录页面-{id}-{name}
      <Link to="/article/1001/frank">跳转到文章页面</Link>
    </div>
  );
};

export default Login;
