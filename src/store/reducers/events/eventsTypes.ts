import {IUser} from "../../../types/userTypes";
import {IEvent} from "../../../types/eventTypes";

export interface IEventState {
    guests: IUser[],
    events: IEvent[]
}

export enum EEvents {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    FETCH_GUESTS = 'FETCH_GUESTS',
    CREATE_EVENT = 'CREATE_EVENT',
    GET_EVENTS = 'GET_EVENTS'
}

export interface ISetGuests {
    type: EEvents.SET_GUESTS,
    payload: IUser[]
}

export interface ISetEvents {
    type: EEvents.SET_EVENTS,
    payload: IEvent[]
}

export interface IFetchGuests {
    type: EEvents.FETCH_GUESTS,
    payload: string[]
}

export interface ICreateEvent {
    type: EEvents.CREATE_EVENT,
    payload: IEvent
}

export interface IGetEvents {
    type: EEvents.GET_EVENTS,
    payload: string
}

export type TEventAction = ISetEvents | ISetGuests | IFetchGuests