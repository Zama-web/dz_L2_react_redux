import { combineReducers } from "redux";
import { addNumberReducer } from "./addNumberReducer";
import { createUserReducer } from "./createUserReducer";


export const rootReducer = combineReducers({
    users: createUserReducer,
    numbers: addNumberReducer
})