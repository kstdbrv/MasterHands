import { FETCH_СATEGORIES, GET_СATEGORIES } from '../actions/actionTypes'

let initialState = { "children": [] };

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_СATEGORIES:
      return action.payload;
      case GET_СATEGORIES:
        return action.payload;
    default: return state;
  }
}

export default categoriesReducer;