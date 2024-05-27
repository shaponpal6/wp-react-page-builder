import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Define a slice with the initial state and reducers
const wooSlice = createSlice({
  name: 'woo',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchWooStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWooSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchWooFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const { fetchWooStart, fetchWooSuccess, fetchWooFailure } = wooSlice.actions;
export default wooSlice.reducer;