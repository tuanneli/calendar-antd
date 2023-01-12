export interface IEvent {
    author: string,
    guest: string,
    date: string,
    description: string;
}

export interface IEventsResponse {
    "event": IEvent
    "id": number
}
