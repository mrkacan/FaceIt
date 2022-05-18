import * as types from './types';

const initialState: types.UsersState = {
    data: [],
    isLoading: false,
    error: '',
    total: 0,
    skip: 0,
    limit: 0,

};

const reducer = (state = initialState, action: types.UsersActionTypes) => {
    switch (action.type) {
    case types.GET_USERS: {
        return {
            ...state,
            isLoading: true
        };
    }
    case types.GET_USERS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: [...new Set([...state.data, ...action.payload.data])],
            skip: action.payload.skip,
            limit: action.payload.limit,
        };
    }
    case types.GET_USERS_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }
    case types.ADD_NEW_USER: {
        return {
            ...state,
            data: [...state.data, action.payload]
        };
    }
    default:
        return state;
    }
};

export {reducer};
