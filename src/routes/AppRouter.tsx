import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import LoginPage from "../components/login/LoginPage";
import {useAppSelector} from "../hooks/useTypeSelector";
import EventsPage from "../components/calendar/EventsPage";

const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    return (
        <>
            {isAuth ?
                <Routes>
                    {privateRoutes.map(route => {
                        return (
                            <Route key={route.path} path={'/login'} element={route.element}/>
                        )
                    })}
                    <Route key={'/*'} path={'/*'} element={<EventsPage/>}/>
                </Routes> :
                <Routes>
                    {publicRoutes.map(route => {
                        return (
                            <Route key={route.path} path={route.path} element={route.element}/>
                        )
                    })}
                    <Route key={'/*'} path={'/*'} element={<LoginPage/>}/>
                </Routes>}
        </>
    );
};

export default AppRouter;