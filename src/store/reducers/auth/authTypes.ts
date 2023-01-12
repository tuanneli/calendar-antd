import {IUser} from "../../../types/userTypes";

export enum EAuthTypes {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface ILoginPayload {
    username: string,
    password?: string,
}

export interface IAuthState {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string,
}

export interface ISetIsAuth {
    type: EAuthTypes.SET_AUTH,
    payload: boolean,
}

export interface ISetUser {
    type: EAuthTypes.SET_USER,
    payload: IUser,
}

export interface ISetError {
    type: EAuthTypes.SET_ERROR,
    payload: string,
}

export interface ISetIsLoading {
    type: EAuthTypes.SET_IS_LOADING,
    payload: boolean,
}

export interface ILogin {
    type: EAuthTypes.LOGIN,
    payload: ILoginPayload,
}

export interface ILogout {
    type: EAuthTypes.LOGOUT,
}

export type TAuthActions =
    ISetIsAuth |
    ISetUser |
    ISetIsLoading |
    ISetError