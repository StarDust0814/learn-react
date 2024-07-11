import { useState } from 'react';
import './index.css';
// 项目的根组件
// App -> index.js -> public/index.html项目渲染逻辑
// jSX高频场景
const count = 5;
function call() {
  return 'frank';
}

// JSX使用列表
const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' },
];

// 定义组件
function MyButton() {
  return <button>自定义组件</button>;
}

const MyButton2 = () => {
  return <button>自定义组件2</button>;
};

function App() {
  // 事件绑定
  const handleClick = (e) => {
    console.log('获取事件对象', e);
  };

  const handleClickByName = (name, e) => {
    console.log('获取事件对象和传递参数 ', name, e);
  };

  // useState使用
  const [count, setCount] = useState(0);

  const handleClickUseState = () => {
    setCount(count + 1);
  };

  const [form, setForm] = useState({ name: 'frank', age: 18 });

  const changeForm = () => {
    setForm({ ...form, age: 25 });
  };

  return (
    <div className="App">
      this is App
      {/* 可以识别引号、JS变量、函数和方法调用、JS对象 */}
      {'this is message'}
      {count}
      {call()}
      {new Date().getDate()}
      <div style={{ color: 'red' }}>this is div</div>
      <br></br>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* react 中的事件绑定 */}
      <button onClick={(e) => handleClickByName('frank', e)}>事件绑定</button>
      <br></br>
      <MyButton></MyButton>
      <MyButton2></MyButton2>
      {/* useState使用 */}
      <br></br>
      <button onClick={handleClickUseState}>{count}</button>
      <br></br>
      <button onClick={changeForm}>修改form{form.age}</button>
      {/* 引入外部css */}
      <span className="foo">this is class name</span>
    </div>
  );
}

export default App;
