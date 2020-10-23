import { FETCH_SERVICE } from './types'

let initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE:
      return action.service;
    default: return state;
  }
}

export default categoriesReducer;