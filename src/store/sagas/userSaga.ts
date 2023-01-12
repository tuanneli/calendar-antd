import {call, put, takeEvery} from "redux-saga/effects";
import {EAuthTypes, ILoginPayload} from "../reducers/auth/authTypes";
import {AuthActionCreators} from "../reducers/auth/authActionCreators";
import axios from "axios";
import {PayloadAction} from "@reduxjs/toolkit";
import {UsersService} from "../../api/API";

function* loginWorker(action: PayloadAction<ILoginPayload>): any {
    try {
        yield put(AuthActionCreators.setIsLoading(true));
        const response = yield call(UsersService.getUser, action.payload);
        if (response.data.length) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', response.data[0].username);
            localStorage.setItem('password', response.data[0].password);
            yield put(AuthActionCreators.setUser(response.data[0]));
            yield put(AuthActionCreators.setIsAuth(true));
        } else {
            yield put(AuthActionCreators.setError('Incorrect login or password'));
        }
        yield put(AuthActionCreators.setIsLoading(false));
    } catch (e: any) {
        yield put(AuthActionCreators.setError(e?.data?.message));
        yield put(AuthActionCreators.setIsAuth(false));
        yield put(AuthActionCreators.setIsLoading(false));
    }
}

export function* loginWatcher() {
    yield takeEvery(EAuthTypes.LOGIN, loginWorker);
}
