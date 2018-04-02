import { combineReducers } from 'redux';

import { MESSAGE_RECEIVED } from "./actions"

let initialState = {
  message: '',
  title: '',
  loading:true,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_RECEIVED:
            state = Object.assign(
              {},
              state,
              {
                title: action.title,
                message: action.message,
                loading:false,
              });
            return state;
        default:
            return state;
    }
};

export default homeReducer;
