import {applyMiddleware, createStore} from "redux"
import rootReducer from "./root-reducer"

const middlewares = []

if (process.env.NODE_ENV === "development") {
    const {logger} = require(`redux-logger`);
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store