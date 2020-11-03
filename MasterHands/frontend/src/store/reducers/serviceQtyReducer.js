import { FETCH_SEARCH_CATEGORIES } from '../actions/actionTypes'

let initialState = []

const servicesQtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_CATEGORIES:
      return action.services
    default: return state
  }
}

export default servicesQtyReducer;