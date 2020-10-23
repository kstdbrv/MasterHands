import { FETCH_СATEGORIES } from './types'

let initialState = { "subcategory": [] };

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_СATEGORIES:
      return action.categories;
    default: return state;
  }
}

export default categoriesReducer;


/* let initialState = Object.freeze({
  supercategories: [],
  categories: { "subcategory": [] },
  services: { "services": [] },
  service: [],
}); */