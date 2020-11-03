import { combineReducers } from 'redux'
import appReducer from '../reducers/app'
import categoriesReducer from '../reducers/categories'
import servicesReducer from '../reducers/services'
import supercategoriesReducer from '../reducers/supercategories'
import serviceReducer from '../reducers/service'
import getAllServicesReducer from './getAllServices'


const rootReducer = combineReducers({
  app: appReducer,
  supercategories: supercategoriesReducer,
  categories: categoriesReducer,
  services: servicesReducer,
  service: serviceReducer,
  allServices: getAllServicesReducer,
})

export default rootReducer