import {
  HIDE_LOADER, SHOW_LOADER,
  SET_CATEGORIES_ID, SET_SERVICES_ID, SET_SERVICE_ID,
  SHOW_POPUP, HIDE_POPUP
} from '../actions/actionTypes'

let initialState = ({
  isLoading: false,
  popupVisible: false,
  categories: 0,
  services: 0,
  service: 0
})

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true }
    case HIDE_LOADER:
        return { ...state, isLoading: false }
    case SET_CATEGORIES_ID:
      return { ...state, categories: action.categories }
    case SET_SERVICES_ID:
      return { ...state, services: action.services }
    case SET_SERVICE_ID:
      return { ...state, service: action.service }
    case SHOW_POPUP:
      return { ...state, popupVisible: true }
    case HIDE_POPUP:
        return { ...state, popupVisible: false }
    default: return state
  }
}

export default appReducer