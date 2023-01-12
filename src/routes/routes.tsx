import {ComponentType, ElementType, ReactElement} from "react";
import LoginPage from "../components/login/LoginPage";
import {Calendar} from "antd";
import {PathRouteProps} from "react-router-dom";
import * as React from "react";
import CalendarPage from "../components/calendar/CalendarPage";
import EventsPage from "../components/calendar/EventsPage";

export enum ERouteNames {
    LOGIN = '/login',
    EVENTS = '/event'
}

export interface IRoutes {
    path: string,
    element: JSX.Element;
}


export const publicRoutes: IRoutes[] = [
    {path: ERouteNames.LOGIN, element: <LoginPage/>}
];

export const privateRoutes: IRoutes[] = [
    {path: ERouteNames.EVENTS, element: <EventsPage/>}
]