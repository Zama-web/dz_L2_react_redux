import { types } from "../types"

export const createUserAction = (user) => {
    return {
        type: types.CREATE_USER,
        payload: user
    }
}
export const addNameAction = (name) => {
    return {
        type: types.ADD_NAME,
        payload: name
    }
}
export const clearInputAction = (name) => {
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}
export const createNumberAction = (number) => {
    return {
        type: types.CREATE_NUMBER,
        payload: number
    }
}
export const addNumberAction = (sum) => {
    return {
        type: types.ADD_NUMBER,
        payload: sum
    }
}
export const clearInputNumberAction = (number) => {
    return {
        type: types.CLEAR_INPUT_NUMBER,
        payload: number
    }
}