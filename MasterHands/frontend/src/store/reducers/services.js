import { FETCH_SERVICES } from '../actions/actionTypes'

let initialState = { "services": [] }

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return action.services;
    default: return state
  }
}

export default servicesReducer;