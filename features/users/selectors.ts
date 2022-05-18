import * as moviesTypes from "./types";

export const getUsersSelector = ({users}: {
    users: moviesTypes.UsersState,
}) => {
    return {
        data: users.data,
        isLoading: users.isLoading,
        error: users.error
    }
}

export const getUserSelector = (id: number) => ({users}: {
    users: moviesTypes.UsersState,
}) => {
    const user = users.data.find(item => item.id === id)
    return user
}
