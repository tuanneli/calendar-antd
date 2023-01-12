import {EAuthTypes, ILogin, ILoginPayload, ISetError, ISetIsAuth, ISetIsLoading, ISetUser} from "./authTypes";
import {IUser} from "../../../types/userTypes";

export const AuthActionCreators = {
    setIsAuth: (bool: boolean): ISetIsAuth => ({
        type: EAuthTypes.SET_AUTH, payload: bool
    }),
    setUser: (user: IUser): ISetUser => ({
        type: EAuthTypes.SET_USER, payload: user
    }),
    setIsLoading: (bool: boolean): ISetIsLoading => ({
        type: EAuthTypes.SET_IS_LOADING, payload: bool
    }),
    setError: (string: string): ISetError => ({
        type: EAuthTypes.SET_ERROR, payload: string
    }),
    login: ({username, password}: ILoginPayload): ILogin => ({type: EAuthTypes.LOGIN, payload: {username, password}}),
    logout: () => ({type: EAuthTypes.LOGOUT})
}