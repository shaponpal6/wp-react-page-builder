import { configureStore, createSlice, current } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

function updateOrAppend(input, data) {
  let foundIndex = -1;
  for (let i = 0; i < data.length; i++) {
      if (data[i].id === input.id) {
          foundIndex = i;
          break;
      }
  }

  if (foundIndex !== -1) {
      // Update val if id matches
      data[foundIndex].val = input.val;
  } else {
      // Append input to the array if id doesn't match
      data.push(input);
  }

  return data;
}

// Define a slice with the initial state and reducers
const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    loading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload || {};
      state.error = null;
    },
    updateScreenDataSuccess(state, action) {
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData)
      let bl_screen_data =  deepData?.bl_screen_data ?? [];
      if(payloadData){
        // const shallowCopy = Object.assign({}, bl_screen_data);
        console.log('@@@@@bl_screen_data>>>>>', bl_screen_data, payloadData)
        // bl_screen_data = updateOrAppend(payloadData, bl_screen_data);
        const index = bl_screen_data.findIndex(item => item.id === payloadData.id);
        if (index !== -1) {
          bl_screen_data[index].val = payloadData.val;
        } else {
          bl_screen_data.push(payloadData);
        }
      };
      return {
        ...state,
        data: {...state.data, bl_screen_data: bl_screen_data},
      }
    },
    removeScreenDataSuccess(state, action) {
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData)
      let bl_screen_data =  deepData?.bl_screen_data ?? [];
      if( bl_screen_data.length){
        bl_screen_data = bl_screen_data.filter(row => row.id !== payloadData.id);
      };
      // state.data = {...data, "data":{...data.data, "bl_screen_data": bl_screen_data}};
      return {
        ...state,
        data: {...state.data, bl_screen_data: bl_screen_data},
      }
    },
    sortingScreenDataSuccess(state, action) {
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData)
      // let bl_screen_data =  deepData?.bl_screen_data ?? [];
      let bl_screen_data =  payloadData;
      // if( bl_screen_data.length){
      //   bl_screen_data = bl_screen_data.filter(row => row.id !== payloadData.id);
      // };
      // state.data = {...data, "data":{...data.data, "bl_screen_data": bl_screen_data}};
      return {
        ...state,
        data: {...state.data, bl_screen_data: bl_screen_data},
      }
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.data = {};
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const { 
  fetchDataStart, 
  fetchDataSuccess, 
  fetchDataFailure, 
  updateScreenDataSuccess, 
  removeScreenDataSuccess, 
  sortingScreenDataSuccess 
} = screenSlice.actions;
export default screenSlice.reducer;