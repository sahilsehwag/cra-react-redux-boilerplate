import {
	applyMiddleware,
	createStore,
	combineReducers,
} from "redux"

import { createLogger }  from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	general: (state={}, action) => state,
})
const middlewares = applyMiddleware(thunk, createLogger())

export default createStore(rootReducer, composeWithDevTools(middlewares))