import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import api from "./middleware/api";
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk,api)
)
const store = createStore(reducer, enhancer)
export default store