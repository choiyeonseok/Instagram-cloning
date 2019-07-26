import { createStore, combineReducers, applyMiddleware } from "redux";
import users from './modules/users';
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createBrowserHistory from "history/createBrowserHistory";


const env = process.env.NODE_ENV;

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];


if(env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);

}

const reducer = combineReducers({
    users,
    router: connectRouter(history)
});

//...middlewares => unpack an array!
let store = initialState =>
    createStore(reducer, applyMiddleware(...middlewares));

export { history };

export default store();

