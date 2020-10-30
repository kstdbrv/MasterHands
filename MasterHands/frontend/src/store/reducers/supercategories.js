import { FETCH_SUPERCATEGORIES } from '../actions/actionTypes'

let initialState = [];

const supercategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPERCATEGORIES:
      return action.supercategories;
    default: return state;
  }
}

export default supercategoriesReducer;