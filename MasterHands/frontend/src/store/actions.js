import { HIDE_LOADER, SHOW_LOADER } from './types'


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

export function fetch() {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

      const response = await fetch(url);
      const json = await response.json();
      
      setTimeout(() => {
       
        dispatch({
          type: FETCH_POSTS,
          payload: json
        });
        dispatch(hideLoader());
        
     }, 1000);
    } catch (e) {
      dispatch(showAlert('Что-то пошло не так...', 'danger'))
      dispatch(hideLoader())
    }

  }
}