import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const dataReducer = (state = { loading: false, data: null, error: null }, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, data: null, error: action.error };
        default:
            return state;
    }
};

export default combineReducers({
    data: dataReducer
});