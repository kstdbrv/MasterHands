import { FETCH_СATEGORIES } from '../actions/actionTypes'

let initialState = { "subcategory": [] };

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_СATEGORIES:
      return action.payload;
    default: return state;
  }
}

export default categoriesReducer;