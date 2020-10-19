import {  FETCH_SERVICE } from './types'

let initialState = Object.freeze({
  service: [],
});

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE:
      return Object.assign(
        {},
        state,
        { service: action.service }
      );
        
    default:
      return state
  }
}

export default servicesReducer;