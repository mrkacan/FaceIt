import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as types from './types';
import {GET_USERS, UsersState} from './types';
import {GET_USERS_API} from '../../api/api';
import * as actions from './actions';

const FETCH_MORE_USER_COUNT = 10;

function* handler() {
    yield takeLatest(GET_USERS, getUsers);
}

function* getUsers() {
    const userStateValues: UsersState = yield select(({users}: { users: UsersState }) => users)
    console.log('userStateValues',userStateValues)
    const willSkipUsers = FETCH_MORE_USER_COUNT + userStateValues.skip;

    try {
        const response: types.UsersAPIResponse = yield call(GET_USERS_API, {
            skip: willSkipUsers,
            limit: FETCH_MORE_USER_COUNT
        });

        if (response.users.length > 0) {

            yield put(actions.getUsersSuccess(response.users, willSkipUsers, FETCH_MORE_USER_COUNT));
        } else {
            //TODO: Can put here error action
            yield put(actions.getUsersSuccess([], 0, 0));
        }

    } catch (error) {
        console.error(error);
    }
}

export {handler};
