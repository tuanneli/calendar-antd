import {call, put, takeEvery} from "redux-saga/effects";
import {AuthActionCreators} from "../reducers/auth/authActionCreators";
import {PayloadAction} from "@reduxjs/toolkit";
import {EEvents} from "../reducers/events/eventsTypes";
import {EventsActionCreators} from "../reducers/events/eventsActionCreators";
import {UsersService} from "../../api/API";

function* eventWorker(action: PayloadAction<string[]>): any {
    try {
        const response = yield call(UsersService.getUsers);
        if (response.data.length) {
            yield put(EventsActionCreators.setGuests(response.data));
        } else {
            // yield put(AuthActionCreators.setError('These users don\'t exist'));
        }
    } catch (e: any) {
        // yield put(AuthActionCreators.setError(e?.data?.message));
    }
}

export function* eventsWatcher() {
    yield takeEvery(EEvents.FETCH_GUESTS, eventWorker);
}
