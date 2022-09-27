import getUsers from "../../services/getUsers";

import { IStore } from "./types";
import { Dispatch } from "redux";

export const setUsersAction = (list: IStore['list']) => {
    return {
        type: 'users/setUsers',
        payload: list,
    }
}

export const loadUsers = (page: number, results:number) => async (dispatch: Dispatch) => {
    try {
        const response = await getUsers(page, results);

        dispatch(setUsersAction(response.data.results))
    } catch (e) {
        console.log(e, " - произошла ошибка")
    }
}