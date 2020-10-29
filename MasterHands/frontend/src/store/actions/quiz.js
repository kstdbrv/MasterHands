import axios from '../../axios/axios-quiz'
/* import axios from 'axios' */
import { source } from '../../axios/axios-quiz'
import {
  FETCH_SERVICE, FETCH_SERVICES,
  FETCH_СATEGORIES, FETCH_SUPERCATEGORIES,
} from './actionTypes'
import {
  hideLoader, showLoader, setCategoriesId,
  setServicesId, setServiceId
} from '../actions/app'


export function fetchSupercategories() {

  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `/api/supercategories/`;
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

      const url = `/api/categories/${id}`;  // const url = `${API_URL}/api/categories/${id}`;
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

      const url = `/api/subcategories/${id}`;
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

      const url = `/api/services/${id}`;
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

export function onEmptyStore(link, TYPE) {

  return async dispatch => {

    try {
      dispatch(showLoader());

      const url = `/api${link}`;
      const response = await axios.get(url, {cancelToken: source.token})
 
      dispatch({
        type: TYPE,
        payload: response.data
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