import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import fetchApp from './reducers';
import thunkMiddleware from 'redux-thunk'


const loggerMiddleware = createLogger()

export default function configureStore(preloadedState){
    return createStore(
        fetchApp,
        preloadedState,
        applyMiddleware(thunkMiddleware,loggerMiddleware)
    )
}