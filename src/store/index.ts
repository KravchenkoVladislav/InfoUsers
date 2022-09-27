import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
    usersReducer
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

export default store;