import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 设置状态和同步修改部分
const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

// 处理异步请求部分
// 解构actions
const { setChannels } = channelStore.actions;

const fetchChannelList = () => {
  // 这里传入dispatch函数用于在异步请求完成后调用reducer中的同步修改函数
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels');
    dispatch(setChannels(res.data.data.channels));
  };
};

export { fetchChannelList };
// 导出reducer
const reducer = channelStore.reducer;
export default reducer;
