import { GET_СATEGORIES } from '../actions/actionTypes'

let initialState = { "children": [] };

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_СATEGORIES:
      return action.payload;
    default: return state;
  }
}

export default categoriesReducer;