import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware as routerMiddlewareConstructor } from "react-router-redux";
import { rootReducer } from './reducers/';
// import { rootEpic } from './epics/';

export var store;

var routerMiddleware = routerMiddlewareConstructor();

var rootEpicMiddleware = createEpicMiddleware();

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "production")
  store = createStore(
    rootReducer,
    applyMiddleware(rootEpicMiddleware, routerMiddleware)
  );
else
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(rootEpicMiddleware, routerMiddleware))
  );
