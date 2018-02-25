import { combineReducers } from 'redux';
import homeReducer from '../components/Home/reducers';

// Combine all the reducers
const rootReducer = combineReducers({
    home: homeReducer,
})

export default rootReducer;
