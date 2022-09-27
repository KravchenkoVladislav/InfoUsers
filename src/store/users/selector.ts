import { IStore } from "./types";

export const selectList = (state: {usersReducer: IStore}): IStore['list'] => state.usersReducer.list;