import { fetchWooStart, fetchWooSuccess, fetchWooFailure } from '../features/wooSlice';

export const wooProductById = (payload) => async (dispatch) => {
    dispatch(fetchWooStart());
    try {
          // const response = await fetch('http://localhost/wordpress/wp-json/wc/store/products/'+payload);
          const response = await fetch('http://localhost/wordpress/wp-json/wc/store/products?s='+payload);
          const responseData = await response.json();
          console.log('###data', payload, responseData);
      if(responseData && responseData !== null){
        dispatch(fetchWooSuccess(responseData));
      }else{
        dispatch(fetchWooFailure(responseData));
      }
    } catch (error) {
      dispatch(fetchWooFailure(error.message));
    }
};

// export const updateScreenData = (payload) => async (dispatch) => {
//     try {
//       dispatch(updateScreenDataSuccess(payload));
//     } catch (error) {
//       dispatch(fetchWooFailure(error.message));
//     }
//   };
// export const removeScreenData = (payload) => async (dispatch) => {
//     try {
//       dispatch(removeScreenDataSuccess(payload));
//     } catch (error) {
//       dispatch(fetchWooFailure(error.message));
//     }
//   };

// export const sortScreenData = (payload) => async (dispatch) => {
//     try {
//       dispatch(sortingScreenDataSuccess(payload));
//     } catch (error) {
//       dispatch(fetchWooFailure(error.message));
//     }
//   };