import { fetchDataStart, fetchDataSuccess, fetchDataFailure, updateScreenDataSuccess, removeScreenDataSuccess, sortingScreenDataSuccess } from '../features/screenSlice';

export const fetchScreenData = (payload) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
          const response = await fetch('http://localhost/wordpress/wp-json/bl/v1/screens/'+payload);
          const data = await response.json();
    //   const data = payload;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
    //   dispatch(fetchDataFailure(error.message));
    }
  };

export const updateScreenData = (payload) => async (dispatch) => {
    try {
      dispatch(updateScreenDataSuccess(payload));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
export const removeScreenData = (payload) => async (dispatch) => {
  // console.log('payload', payload)
  // return ;
    try {
      dispatch(removeScreenDataSuccess(payload));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };

export const sortScreenData = (payload) => async (dispatch) => {
  console.log('111111111111@@@payload', payload, dispatch)
    try {
      dispatch(sortingScreenDataSuccess(payload));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };