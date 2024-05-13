import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './features/todosSlice';

export const fetchData = (payload) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
    //   const response = await fetch('https://api.example.com/data');
    //   const data = await response.json();
      const data = payload;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };