import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../actions/"

let initialState = {
  message: '',
  loading:true,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { message: action.message, loading:false });
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;
