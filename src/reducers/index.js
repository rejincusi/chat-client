import { combineReducers } from 'redux'
import channels from './channels'
import user from './user'

const reducer = combineReducers({
   channels,
   user
})
export default reducer