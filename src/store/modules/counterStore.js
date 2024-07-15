import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  // 初始状态数据
  initialState: {
    reduxCount: 0,
  },
  // 修改数据的同步方法
  reducers: {
    increment(state) {
      state.reduxCount++;
    },
    decrement(state) {
      state.reduxCount--;
    },
    // 修改状态的方法支持直接修改,传入的参数会落在action的payload属性上
    addToNum(state, action) {
      state.reduxCount = action.payload;
    },
  },
});

// 解构出action的函数
const { increment, decrement, addToNum } = counterStore.actions;
// 获取reducer
const counterReducer = counterStore.reducer;
export { increment, decrement, addToNum };
export default counterReducer;
