import { ALL_CHANNELS } from '../actions'

export default function channels (state = [], action = {}) {
  switch (action.type) {
    case ALL_CHANNELS:
      return action.payload
    default:
      return state
  }
}