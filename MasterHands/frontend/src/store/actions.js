import {
  HIDE_LOADER, SHOW_LOADER, FETCH_SERVICE, FETCH_SERVICES, SET_SERVICE_LINK,
  FETCH_СATEGORIES, FETCH_SUPERCATEGORIES, SET_CATEGORIES_LINK, SET_SERVICES_LINK
} from './types'
import axios from 'axios'

const API_URL = 'http://localhost:8000';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export function fetchSupercategories() {

  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `${API_URL}/api/supercategories/`;
      const response = await axios.get(url, {cancelToken: source.token});
         
      dispatch({
        type: FETCH_SUPERCATEGORIES,
        supercategories: response.data
      });

      dispatch(hideLoader());
        
    } catch(thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader())
      } else {
      /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
      dispatch(hideLoader())
      }
    }
  }
}

export function fetchСategories(nextlink) {
  
  return async (dispatch, getState) => {

    const { prevlink } = getState()
    if (prevlink.categoriesLink === nextlink) return;

    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${nextlink}`;
      const response = await axios.get(url, {cancelToken: source.token});
         
      dispatch({
        type: FETCH_СATEGORIES,
        categories: response.data
      });

      dispatch(hideLoader());
        
    } catch(thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader())
      } else {
      /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
      dispatch(hideLoader())
      }
    }
  }
}

export function fetchServices(nextlink) {
  
  return async (dispatch, getState) => {

    const { prevlink } = getState()
    if (prevlink.servicesLink === nextlink) return;

    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${nextlink}`;
      const response = await axios.get(url, {cancelToken: source.token})

      dispatch({
        type: FETCH_SERVICES,
        services: response.data
      });

      dispatch(hideLoader());
        
    } catch(thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      } else {
      /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      }
    }
  }
}

export function fetchService(nextlink) {
  
  return async (dispatch, getState) => {

    const { prevlink } = getState()
    if (prevlink.serviceLink === nextlink) return;

    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${nextlink}`;
      const response = await axios.get(url, {cancelToken: source.token})

      dispatch({
        type: FETCH_SERVICE,
        service: response.data
      });

      dispatch(hideLoader());
        
    } catch(thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader())
      } else {
      /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
      dispatch(hideLoader())
      }
    }
  }
}

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

export function setCategoriesLink(link) {
  return {
    type: SET_CATEGORIES_LINK,
    categoriesLink: link
  }
}

export function setServicesLink(link) {
  return {
    type: SET_SERVICES_LINK,
    servicesLink: link
  }
}

export function setServiceLink(link) {
  return {
    type: SET_SERVICE_LINK,
    serviceLink: link
  }
}