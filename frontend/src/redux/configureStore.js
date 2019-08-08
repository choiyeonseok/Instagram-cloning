import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import users from "./modules/users";

const env = process.env.NODE_ENV;

const middlewares = [thunk];
//list로 구성된 thunk를 middleware 로 받아서 unpack함. 

if(env ==='development'){
    const { logger } = require("redux-logger"); //dev일때만 logger를 부른다.
    middlewares.push(logger);  // middleware는 현재 array
}else {

}

const reducer = combineReducers({
    users
})

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));


export default store();

