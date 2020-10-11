import {
	combineReducers,
	applyMiddleware,
	createStore,
} from "redux"

import thunk from "redux-thunk"
import { createLogger }  from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';

import common from 'common/reducer'


const rootReducer = combineReducers({
	common,
})

const middlewares = applyMiddleware(thunk, createLogger())

export default createStore(rootReducer, composeWithDevTools(middlewares))