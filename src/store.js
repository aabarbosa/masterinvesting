import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import userReducer from './reducers/userReducer'
import guiReducer from './reducers/guiReducer'

export default createStore(
    combineReducers({userReducer,}), 
    applyMiddleware(logger, thunk, promise()))

