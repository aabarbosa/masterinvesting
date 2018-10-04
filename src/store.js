import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'


import user from './reducers/userReducer'
import math from './reducers/mathReducer'

export default createStore(
    combineReducers({
        user, 
        math
    }), applyMiddleware(logger, thunk, promise())
)
