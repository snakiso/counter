import {combineReducers, legacy_createStore} from "redux";
import {valuesReducer} from "./values-reducer";

const rootReducer = combineReducers({
    values: valuesReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store