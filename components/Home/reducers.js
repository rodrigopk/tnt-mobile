import { combineReducers } from 'redux';

import { MESSAGE_RECEIVED } from "./actions"

let initialState = {
  message: '',
  loading:true,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_RECEIVED:
            state = Object.assign({}, state, { message: action.message, loading:false });
            return state;
        default:
            return state;
    }
};

export default homeReducer;
