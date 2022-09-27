import { IStore } from "./types";

export const setUsersAction = (list: IStore['list']) => {
    return {
        type: 'users/setUsers',
        payload: list,
    }
}