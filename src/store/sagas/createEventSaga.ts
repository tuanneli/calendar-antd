import {put, takeEvery} from "redux-saga/effects";
import {EEvents} from "../reducers/events/eventsTypes";
import {IEvent, IEventsResponse} from "../../types/eventTypes";
import {PayloadAction} from "@reduxjs/toolkit";
import {EventsActionCreators} from "../reducers/events/eventsActionCreators";
import {EventService} from "../../api/API";

function* createEventWorker(action: PayloadAction<IEvent>) {
    try {
        const eventsResp: IEventsResponse[] = yield EventService.getEvents();
        const events: IEvent[] = yield eventsResp.map((event, index) => {
            if (index < eventsResp.length) {
                return event.event;
            }
        });
        yield events.push(action.payload);
        yield put(EventsActionCreators.setEvents(events));
        yield EventService.createEvent(action.payload);
    } catch (e) {
        console.log(e);
    }
}

export function* createEventWatcher() {
    yield takeEvery(EEvents.CREATE_EVENT, createEventWorker);
}