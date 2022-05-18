import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {GET_USERS} from './types';
import {GET_USERS_API} from '../../api/api';
import * as actions from './actions';

function* handler() {
    yield takeEvery(GET_USERS, getUsers);
}

function* getUsers() {
    try {
        const response: types.UsersAPIResponse = yield call(GET_USERS_API);

        if (response.users.length > 0) {

            yield put(actions.getUsersSuccess(response.users));
        } else {
            //TODO: Can put here error action
            yield put(actions.getUsersSuccess([]));
        }

    } catch (error) {
        console.error(error);
    }
}

export {handler};
