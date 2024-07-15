import { useState, useRef, useContext, createContext, useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addToNum } from './store/modules/counterStore';
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
  return (
    <div>
      this is son, {props.name}
      <div>
        通过子组件嵌套在父组件时内嵌的所有内容，都会被视为父组件传递到子组件的数据children{' '}
        {props.children}
      </div>
    </div>
  );
}

function Son1({ onGetMsg }) {
  const sonMsg = 'this is the msg from son';
  return (
    <div>
      this is Son
      <br></br>
      <button onClick={() => onGetMsg(sonMsg)}>sendMsg</button>
    </div>
  );
}

// 兄弟组件传递参数 A -> B
function AComponent({ onGetAName }) {
  const name = 'this is A name';
  return (
    <div>
      this is A component<br></br>
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  );
}

function BComponent({ name }) {
  return <div>this is B component, {name}</div>;
}

// 跨层级组件传参，使用 context
// 在顶层组组件使用Provider提供数据
// 在底层通过useContext钩子函数使用数据
const MsgContext = createContext();
function A() {
  return (
    <div>
      this is A component
      <B />
    </div>
  );
}

function B() {
  const msg = useContext(MsgContext);
  return <div>this is B component, {msg}</div>;
}

// 清除副作用
function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中...');
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>this is timer component</div>;
}

// 自定义hook
function useToggle() {
  const [value, setValue] = useState(true);

  const toggle = () => setValue(!value);

  return {
    value,
    toggle,
  };
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

  // 子组件传递参数给父组件，实际上就是子组件调用父组件的函数并传递实参
  const [msg, setMsg] = useState('');

  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };

  // 兄弟组件传递参数
  const [componentName, setComponentName] = useState('');

  const getAName = (componentName) => {
    console.log(componentName);
    setComponentName(componentName);
  };

  // Context跨级传参
  const msgContextValue = 'this is context value';

  // useEffect处理由渲染完成后触发的效果
  // 第二个参数 [] 为空，代表只会触发一次
  const URL = 'http://geek.itheima.net/v1_0/channels';
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      setList(jsonRes.data.channels);
    }
    getList();
  }, []);

  // 清除副作用
  const [show, setShow] = useState(true);
  // 自定义hook
  const { value: showValue, toggle } = useToggle();
  console.log('showValue ', showValue);
  // 引入redux并使用状态管理
  const { reduxCount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      this is App
      {/* 封装通用逻辑使用自定义Hook */}
      <br></br>
      <div>
        {showValue && <div>this is use hook</div>}
        <button onClick={toggle}>toggle</button>
      </div>
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
      {/* <br></br>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
      </div> */}
      {/* 获取DOM */}
      <br></br>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取DOM</button>
      {/* 父组件向子组件传递参数 */}
      {/* <Son name={name}>
        <span>这是通过父组件引入子组件内嵌的数据</span>
      </Son> */}
      {/* 子组件向父组件传递参数 */}
      <Son1 onGetMsg={getMsg} />
      <div>this is parent component, the msg from son: {msg}</div>
      {/* 兄弟组件传递参数，通过状态提升 */}
      <br></br>
      <AComponent onGetAName={getAName}></AComponent>
      <BComponent name={componentName}></BComponent>
      {/* 跨层级组件传参 */}
      <MsgContext.Provider value={msgContextValue}>
        this is context top,
        <A />
      </MsgContext.Provider>
      {/* useEffect触发 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 清除副作用 */}
      <div>
        {show && TimerComponent}
        <button onClick={() => setShow(false)}>卸载timer组件</button>
      </div>
      {/* 引入redux */}
      <br></br>
      <button onClick={() => dispatch(decrement())}>-</button>
      {reduxCount}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
    </div>
  );
}

export default App;
