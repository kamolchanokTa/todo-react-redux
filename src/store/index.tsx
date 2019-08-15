import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from '../reducers'


const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});

/*
 * We're giving State interface to create store
 * store is type of IState defined in our reducers
 */
const store = createStore(reducer, initialState, applyMiddleware(logger))

export default store