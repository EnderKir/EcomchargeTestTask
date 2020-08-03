import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import { sagaWatcher } from "../saga/sagas";

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);