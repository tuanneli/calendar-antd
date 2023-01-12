import {EEvents, ICreateEvent, IFetchGuests, IGetEvents, ISetEvents, ISetGuests} from "./eventsTypes";
import {IEvent} from "../../../types/eventTypes";
import {IUser} from "../../../types/userTypes";

export const EventsActionCreators = {
    setEvents: (events: IEvent[]): ISetEvents => ({type: EEvents.SET_EVENTS, payload: events}),
    setGuests: (guests: IUser[]): ISetGuests => ({type: EEvents.SET_GUESTS, payload: guests}),
    fetchGuests: (guestNames: string[]): IFetchGuests => ({type: EEvents.FETCH_GUESTS, payload: guestNames}),
    createEvent: (event: IEvent): ICreateEvent => ({type: EEvents.CREATE_EVENT, payload: event}),
    getEvents: (username: string): IGetEvents => ({type: EEvents.GET_EVENTS, payload: username}),
}