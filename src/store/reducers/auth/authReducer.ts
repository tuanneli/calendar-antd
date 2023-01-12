import {Action} from "redux";
import {EAuthTypes, IAuthState, TAuthActions} from "./authTypes";
import {IUser} from '../../../types/userTypes';

const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: '',
}

export default function authReducer(state = initialState, action: TAuthActions): IAuthState {
    switch (action.type) {
        case EAuthTypes.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false
            }
        case EAuthTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case EAuthTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case EAuthTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};