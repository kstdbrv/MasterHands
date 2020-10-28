import {
  HIDE_LOADER, SHOW_LOADER, FETCH_SERVICE, FETCH_SERVICES, SET_SERVICE_ID,
  FETCH_СATEGORIES, FETCH_SUPERCATEGORIES, SET_CATEGORIES_ID, SET_SERVICES_ID
} from './types'
import axios from 'axios'

const API_URL = 'http://77.222.63.249';
/* http://77.222.63.249 */
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

export function fetchСategories(id) {

  return async (dispatch, getState) => {

    const { app } = getState();
    if (app.categories === id) return;

    try {
      dispatch(showLoader());
      dispatch(setCategoriesId(id));

      const url = `${API_URL}/api/categories/${id}`;
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

export function fetchServices(id) {
  
  return async (dispatch, getState) => {

    const { app } = getState()
    if (app.services === id) return;

    try {
      dispatch(showLoader());
      dispatch(setServicesId(id));

      const url = `${API_URL}/api/subcategories/${id}`;
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

export function fetchService(id) {
  
  return async (dispatch, getState) => {

    const { app } = getState()
    if (app.service === id) return;

    try {
      dispatch(showLoader());
      dispatch(setServiceId(id));

      const url = `${API_URL}/api/services/${id}`;
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