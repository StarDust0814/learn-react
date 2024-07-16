import { useNavigate, useParams } from 'react-router-dom';
const Article = () => {
  const navigate = useNavigate();
  // 获取路由参数
  const params = useParams();
  let id = params.id;
  let name = params.name;
  return (
    <div>
      文章页面-{id}-{name}
      <button onClick={() => navigate('/login?id=1&name=frank')}>
        跳转到登录页面
      </button>
    </div>
  );
};

export default Article;
