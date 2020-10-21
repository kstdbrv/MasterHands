import {  FETCH_SERVICE, FETCH_SUPERCATEGORIES } from './types'

/* const initialState = {};
Object.freeze(initialState); */

let initialState = Object.freeze({
  supercategories: [],
  service: [],
});

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPERCATEGORIES:
      return Object.assign({}, state, { supercategories: action.supercategories }
      );
    case FETCH_SERVICE:
      return Object.assign({}, state, { service: action.service }
      );
        
    default:
      return state
  }
}

export default servicesReducer;