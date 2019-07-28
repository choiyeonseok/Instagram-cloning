import { createStore, combineReducers, applyMiddleware } from "redux";
import user from './modules/user';
import photos from './modules/photos';
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
//import Reactotron from "../ReactotronConfig";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";


const env = process.env.NODE_ENV;

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];


if(env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);

}

const reducer = combineReducers({
    user,
    photos,
    router: connectRouter(history),
    i18nState
});

let store;
if (env === "development"){
    store = initialState =>
        createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
}else {
    store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}


//...middlewares => unpack an array!
// let store = initialState =>
//     createStore(reducer, applyMiddleware(...middlewares));

export { history };

export default store();

