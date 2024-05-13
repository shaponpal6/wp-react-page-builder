import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Define a slice with the initial state and reducers
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data += action.payload;
      state.error = null;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export default dataSlice.reducer;