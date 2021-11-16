import {createStore} from 'redux'
import {cakeReducer} from './cake/cakeReducer'

const store = createStore(cakeReducer)
console.log('test');

export default store