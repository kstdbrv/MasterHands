import { HIDE_LOADER, SHOW_LOADER, FETCH_SERVICE } from './types'
import axios from 'axios'

const API_URL = 'http://localhost:8000';

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

export function fetchService(link) {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${link}`;
      const response = await axios.get(url)
      /* const json = await response.json() */
         
      dispatch({
        type: FETCH_SERVICE,
        service: response
      });

      dispatch(hideLoader());
        
    } catch (e) {
      console.log(e)
/*       dispatch(showAlert('Что-то пошло не так...', 'danger'))
      dispatch(hideLoader()) */
    }

  }
}