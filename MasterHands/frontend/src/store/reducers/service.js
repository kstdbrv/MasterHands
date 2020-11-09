import { GET_SERVICE } from '../actions/actionTypes'

let initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE:
      return action.service;
    default: return state;
  }
}

export default categoriesReducer;