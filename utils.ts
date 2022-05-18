import {MovieItem} from "./features/users/types";

const addOrRemove = (array: MovieItem[], value: MovieItem) => {
    let index = array.findIndex((item: MovieItem) => item.imdbID === value.imdbID);
    let newArray = [...array]
    if (index === -1) {
        newArray.push(value);
    } else {
        newArray.splice(index, 1);
    }

    return newArray
}

export {
    addOrRemove
}
