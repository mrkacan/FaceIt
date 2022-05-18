import {combineReducers} from 'redux';
import {reducer as usersReducer} from './users/reducers';

const reducer = combineReducers({
    users: usersReducer,
});

export {reducer};
