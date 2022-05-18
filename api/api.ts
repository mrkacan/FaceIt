export const GET_USERS_API = () => {
    //TODO: Use from env file
    const REQUEST_URL = 'https://dummyjson.com';

    return fetch(`${REQUEST_URL}/users`).then((response) => response.json());
};
