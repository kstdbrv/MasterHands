import { FETCH_СATEGORIES } from './types'

let initialState = {};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_СATEGORIES:
      return action.categories;
    default: return state;
  }
}

export default categoriesReducer;