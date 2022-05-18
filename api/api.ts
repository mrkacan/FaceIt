export const GET_USERS_API = ({
                                  limit,
                                  skip
                              }: GetUsersApiRequest) => {
    //TODO: Use from env file
    const REQUEST_URL = 'https://dummyjson.com';

    return fetch(`${REQUEST_URL}/users?limit=${limit}&skip=${skip}`).then((response) => response.json());
};

export type GetUsersApiRequest = {
    limit: number;
    skip: number;
}
