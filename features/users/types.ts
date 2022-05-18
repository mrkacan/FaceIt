import {Action} from 'redux';

const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS =  'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
const ADD_NEW_USER = 'ADD_NEW_USER';

interface GetUsersAction extends Action {
    type: typeof GET_USERS;
}

interface GetUsersSuccessAction extends Action {
    type: typeof GET_USERS_SUCCESS;
    payload: {
        data: UserItem[];
    };
}

interface GetUsersErrorAction extends Action {
    type: typeof GET_USERS_FAILURE;
    payload: {
        error: string;
    };
}

interface AddNewUserAction extends Action {
    type: typeof ADD_NEW_USER;
    payload: {
        user: UserItem
    }
}

    export interface Hair {
        color: string;
        type: string;
    }

    export interface Coordinates {
        lat: number;
        lng: number;
    }

    export interface Address {
        address: string;
        city: string;
        coordinates: Coordinates;
        postalCode: string;
        state: string;
    }

    export interface Bank {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    }

    export interface Coordinates2 {
        lat: number;
        lng: number;
    }

    export interface Address2 {
        address: string;
        city: string;
        coordinates: Coordinates2;
        postalCode: string;
        state: string;
    }

    export interface Company {
        address: Address2;
        department: string;
        name: string;
        title: string;
    }

    export interface UserItem {
        id: number;
        firstName: string;
        lastName: string;
        maidenName: string;
        age: number;
        gender: string;
        email: string;
        phone: string;
        username: string;
        password: string;
        birthDate: string;
        image: string;
        bloodGroup: string;
        height: number;
        weight: number;
        eyeColor: string;
        hair: Hair;
        domain: string;
        ip: string;
        address: Address;
        macAddress: string;
        university: string;
        bank: Bank;
        company: Company;
        ein: string;
        ssn: string;
        userAgent: string;
    }



export type UsersState = {
    data: UserItem[];
    isLoading: boolean;
    error: string;
}

export interface MovieItem {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
}

export type UsersAPIResponse = {
    limit: number;
    skip: number;
    total: number;
    users: UserItem[];
}

export {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    ADD_NEW_USER
};

export type UsersActionTypes =
    | GetUsersAction
    | GetUsersSuccessAction
    | GetUsersErrorAction
    | AddNewUserAction
