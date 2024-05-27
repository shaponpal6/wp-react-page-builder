import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import wooReducer from './features/wooSlice'
import screenReducer from './features/screenSlice'

// Create the Redux store
export const store = configureStore({
  reducer: {
    woo: wooReducer,
    screen: screenReducer,
  },
});

// Create a custom hook for dispatching actions
export const useAppDispatch = () => useDispatch();