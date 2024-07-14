import { useState, useRef } from 'react';
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

// 父子组件通信
function Son(props) {
  console.log(props);
  return <div>this is son, {props.name}</div>;
}

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

  // 绑定受控表单步骤
  // 1. 绑定表单的受控变量 value
  // 2. 绑定表单的更新方法 setValue
  const [value, setValue] = useState('');

  // react获取DOM
  // 1. useRef生成一个ref对象，通过标签的ref属性绑定
  // 2. 当DOM可用时，通过ref.current获取
  // 可用代表只有当DOM渲染完毕后，才能获取
  const inputRef = useRef(null);

  const showDom = () => {
    console.dir(inputRef.current);
  };

  const name = 'from father component';
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
      {/* 受控表单绑定 */}
      <br></br>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
      </div>
      {/* 获取DOM */}
      <br></br>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取DOM</button>
      {/* 父组件向子组件传递参数 */}
      <Son name={name} />
    </div>
  );
}

export default App;
