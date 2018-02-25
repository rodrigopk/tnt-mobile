import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "./actions"

let initialState = {
  message: '',
  loading:true,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { message: action.message, loading:false });
            return state;
        default:
            return state;
    }
};

export default homeReducer;
