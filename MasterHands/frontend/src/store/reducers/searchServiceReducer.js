import { FETCH_SEARCH_SERVICE } from '../actions/actionTypes'

let initialState = []

const searchServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SERVICE:
      return action.service
    default: return state
  }
}

export default searchServiceReducer;