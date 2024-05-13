import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import todosReducer from './features/todosSlice'
import screenReducer from './features/screenSlice'

// Create the Redux store
export const store = configureStore({
  reducer: {
    // data: todosReducer,
    screen: screenReducer,
  },
});

// Create a custom hook for dispatching actions
export const useAppDispatch = () => useDispatch();