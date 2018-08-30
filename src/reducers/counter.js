import { LOGIN, UPDATE } from '../constants/counter'

const INITIAL_STATE = {
  login: {}
}

export default function counter (state=INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        login: action.value
      }
     default:
       return state
  }
}
