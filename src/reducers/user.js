import { SET_NAME } from '../actions'

export default function user (state = 'anonymous', action = {}) {
  switch (action.type) {
    case SET_NAME:
      return action.payload
    default:
      return state
  }
} 