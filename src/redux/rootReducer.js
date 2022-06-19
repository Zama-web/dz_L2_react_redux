import { combineReducers } from "redux";
import { createUserReducer } from "./createUserReducer";



export const rootReducer = combineReducers({
    users: createUserReducer
})