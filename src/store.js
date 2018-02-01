import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as calculator} from './calculator';

const rootReducer = combineReducers({
    calculator,
});

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}
