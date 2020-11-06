import { FETCH_SERVICES } from '../actions/actionTypes'

let initialState = { "services": [] }

const getAllServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return action.allServices
    default: return state
  }
}

export default getAllServicesReducer;