import {
  HIDE_LOADER, SHOW_LOADER, FETCH_SERVICE, FETCH_SERVICES,
  FETCH_СATEGORIES, FETCH_SUPERCATEGORIES
} from './types'
import axios from 'axios'
import { useMemo } from 'react';

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

export function fetchСategories(id) {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

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

export function fetchServices(link) {
  
  return async (dispatch, getState) => {

    const prevLink = getState().link;
    console.log(prevLink)
    if (prevLink === link) return;

    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${link}`;
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

export function fetchService(link) {
  
  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `${API_URL}/api${link}`;
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


/* const [servicesId, setServicesId] = useState({})

const services = useSelector(state => state.services.services);

function getServices(id) {
  setServicesId({servicesId: id})
  console.log(id) */
  //if (services.services.length/*  && nextProps.id !== prevProps.id */) {
/*     dispatch(fetchServices(`/subcategories/${id}`))
  }
}

useMemo(() => (
    console.log('memo works'),
    getServices(props.match.params.id) 
),[servicesId]) */