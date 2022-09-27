import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    list: [],
}

const usersReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'users/setUsers':
            return{...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default usersReducer;