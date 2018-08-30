import {
  LOGIN,
  UPDATE
} from '../constants/counter'


export const update = () => {
  return {
    type: UPDATE
  }
}

// 异步的action
export const login = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(update())
    }, 2000)
  }
}
