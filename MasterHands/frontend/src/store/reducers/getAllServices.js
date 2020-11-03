import { GET_SERVICES } from '../actions/actionTypes'

let initialState = []

const getAllServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return action.allServices
    default: return state
  }
}

export default getAllServicesReducer;