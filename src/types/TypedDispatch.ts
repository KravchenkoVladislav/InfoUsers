import usersReducer from 'store/users/reducer';
import { AnyAction } from 'redux';

import { ThunkDispatch } from 'redux-thunk';
type ReduxState = ReturnType<typeof usersReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
