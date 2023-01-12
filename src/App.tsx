import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./routes/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/navbar/Navbar";
import {useAppDispatch, useAppSelector} from "./hooks/useTypeSelector";
import {AuthActionCreators} from "./store/reducers/auth/authActionCreators";
import {EventsActionCreators} from "./store/reducers/events/eventsActionCreators";

function App() {
    const dispatch = useAppDispatch();
    const {guests, events} = useAppSelector(state => state.eventsReducer);
    const {user, isAuth} = useAppSelector(state => state.authReducer);

    useEffect(() => {
        dispatch(EventsActionCreators.fetchGuests(['user', 'admin']));
        dispatch(EventsActionCreators.getEvents(localStorage.getItem('username') as string));
        if (localStorage.getItem('auth')) {
            dispatch(AuthActionCreators.login({
                username: localStorage.getItem('username') as string,
                password: localStorage.getItem('password') as string
            }));
            dispatch(AuthActionCreators.setIsAuth(true));
        }
    }, [isAuth])

    return (
        <div className="App">
            <Layout.Content>
                <Navbar/>
            </Layout.Content>
            <AppRouter/>
        </div>
    );
}

export default App;
