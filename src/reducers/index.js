import { combineReducers } from 'redux';


import map from './map'
import test from './test'


const rootReducer = combineReducers({
    map,
    test
});

export default rootReducer