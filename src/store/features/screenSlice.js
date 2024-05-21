import { createSlice } from '@reduxjs/toolkit';

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
      const deepData = JSON.parse(JSON.stringify(state.data));
      let bl_screen_data =  deepData?.bl_screen_data ?? [];
      if(payloadData){
        const index = bl_screen_data.findIndex(item => item.id === payloadData.id);
        if (index !== -1) {
          bl_screen_data[index] = payloadData;
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
      const deepData = JSON.parse(JSON.stringify(state.data));
      let bl_screen_data =  deepData?.bl_screen_data ?? [];
      if( bl_screen_data.length){
        bl_screen_data = bl_screen_data.filter(row => row.id !== payloadData.id);
      };
      return {
        ...state,
        data: {...state.data, bl_screen_data: bl_screen_data},
      }
    },
    sortingScreenDataSuccess(state, action) {
      const payloadData = action.payload;
      let bl_screen_data =  payloadData;
      if(bl_screen_data && bl_screen_data.length > 0) {
        bl_screen_data = bl_screen_data.map(item => ({id: item.id, type: item.type, data: item.data || {}, component: item.component || {}}));
      }
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