import {put, takeEvery} from "redux-saga/effects";
import {EEvents} from "../reducers/events/eventsTypes";
import {EventService} from "../../api/API";
import {IEvent, IEventsResponse} from "../../types/eventTypes";
import {EventsActionCreators} from "../reducers/events/eventsActionCreators";
import {PayloadAction} from "@reduxjs/toolkit";

function* getEventsWorker(action: PayloadAction<string>) {
    const events: IEventsResponse[] = yield EventService.getEvents();
    yield put(EventsActionCreators.setEvents(events.filter(event => event.event.author === action.payload ||
        event.event.guest === action.payload)
        .map(event => event.event)));
}

export function* getEventsWatcher() {
    yield takeEvery(EEvents.GET_EVENTS, getEventsWorker)
}