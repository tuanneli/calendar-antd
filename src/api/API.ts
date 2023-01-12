import axios from "axios";
import {ILoginPayload} from "../store/reducers/auth/authTypes";
import {IEvent, IEventsResponse} from "../types/eventTypes";

export class UsersService {
    static getUsers() {
        return axios.get<ILoginPayload>(`http://localhost:4000/users`);
    }

    static getUser({username, password}: ILoginPayload) {
        return axios.get<ILoginPayload>(`http://localhost:4000/users?username=${username}&password=${password}`);
    }
}

export class EventService {
    static async getEvents() {
        const result = await axios.get<IEventsResponse[]>(`http://localhost:4000/events`);
        return result.data;
    }

    static createEvent(event: IEvent) {
        return axios.post(`http://localhost:4000/events`, {
            event
        });
    }
}

