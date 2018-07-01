import { createStore,combineReducers } from 'redux';
import TaskReducer from './reducer';


const reducer = combineReducers({
  task:TaskReducer
})

const store = createStore(reducer)

export default store;
