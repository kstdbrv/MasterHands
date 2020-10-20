import { HIDE_LOADER, SHOW_LOADER, FETCH_SERVICE, FETCH_SUPERCATEGORIES } from './types'
import axios from 'axios'

const API_URL = 'http://localhost:8000';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export function fetchSupercategories() {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `${API_URL}/api/supercategories/`;
      const response = await axios.get(url);
         
      dispatch({
        type: FETCH_SUPERCATEGORIES,
        supercategories: response.data
      });

      dispatch(hideLoader());
        
    } catch (e) {
      console.log(e)
/*       dispatch(showAlert('Что-то пошло не так...', 'danger'))
      dispatch(hideLoader()) */
    }
  }
}

export function fetchService(link) {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${link}`;
      const response = await axios.get(url)

      dispatch({
        type: FETCH_SERVICE,
        service: response.data
      });

      dispatch(hideLoader());
        
    } catch (e) {
      console.log(e)
/*       dispatch(showAlert('Что-то пошло не так...', 'danger'))
      dispatch(hideLoader()) */
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