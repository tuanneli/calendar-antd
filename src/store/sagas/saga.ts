import {loginWatcher} from "./userSaga";
import {all} from "redux-saga/effects";
import {eventsWatcher} from "./eventsSaga";
import {createEvent} from "@testing-library/react";
import {createEventWatcher} from "./createEventSaga";
import {getEventsWatcher} from "./getEventsSaga";

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        eventsWatcher(),
        createEventWatcher(),
        getEventsWatcher(),
    ]);
}