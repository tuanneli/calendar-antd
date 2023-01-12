import {EEvents, IEventState, TEventAction} from "./eventsTypes";
import {IUser} from "../../../types/userTypes";
import {IEvent} from "../../../types/eventTypes";

const initState: IEventState = {
    guests: [] as IUser[],
    events: [] as IEvent[],
}

export default function eventsReducer(state = initState, action: TEventAction): IEventState {
    switch (action.type) {
        case EEvents.SET_GUESTS:
            return {
                ...state,
                guests: action.payload
            }
        case EEvents.SET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state;
    }
};

export {}