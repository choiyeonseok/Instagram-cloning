import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import user from "./modules/user";
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from "react-router-redux";
import * as createHistory from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";


const env = process.env.NODE_ENV;

const history = createHistory.createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];
//list로 구성된 thunk를 middleware 로 받아서 unpack함. 


if(env ==='development'){
    const { logger } = require("redux-logger"); //dev일때만 logger를 부른다.
    middlewares.push(logger);  // middleware는 현재 array
}

const reducer = combineReducers({
    //reducer는 state을 action을 통해 변경할 수 있다.
    user,
    router: connectRouter(history),
    i18nState,
});

let store;

if ( env === "development") {
    store = initialState =>
        createStore(
            reducer, 
            composeWithDevTools(applyMiddleware(...middlewares))
        );
} else {
    store = initialState =>
        createStore(
            reducer,
            applyMiddleware(...middlewares)
        );
}


export { history };

export default store();

