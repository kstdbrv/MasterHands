import { SET_CATEGORIES_LINK, SET_SERVICES_LINK, SET_SERVICE_LINK } from './types'

let initialState = {
  categoriesLink: '',
  servicesLink: '',
  serviceLink: ''
}

const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_LINK:
      return { ...state, categoriesLink: action.categoriesLink }
    case SET_SERVICES_LINK:
      return { ...state, servicesLink: action.servicesLink }
    case SET_SERVICE_LINK:
      return { ...state, serviceLink: action.serviceLink }
    default: return state
  }
}

export default linkReducer