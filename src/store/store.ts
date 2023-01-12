import {applyMiddleware, combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/reducers";
import rootSaga from "./sagas/saga";

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const rootReducer = combineReducers(reducers)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    enhancers: undefined,
    preloadedState: undefined,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);
