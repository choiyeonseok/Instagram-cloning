import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import users from "./modules/users";
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];
//list로 구성된 thunk를 middleware 로 받아서 unpack함. 


if(env ==='development'){
    const { logger } = require("redux-logger"); //dev일때만 logger를 부른다.
    middlewares.push(logger);  // middleware는 현재 array
}

const reducer = combineReducers({
    users,
    router: connectRouter(history),
});

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));


export { history };

export default store();

