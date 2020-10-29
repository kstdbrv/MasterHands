import {
  SHOW_LOADER, HIDE_LOADER, SET_CATEGORIES_ID,
  SET_SERVICES_ID, SET_SERVICE_ID,
} from './actionTypes'

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function setCategoriesId(id) {
  return {
    type: SET_CATEGORIES_ID,
    categories: id
  }
}

export function setServicesId(id) {
  return {
    type: SET_SERVICES_ID,
    services: id
  }
}

export function setServiceId(id) {
  return {
    type: SET_SERVICE_ID,
    service: id
  }
}



