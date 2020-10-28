import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import categoriesReducer from './reducers/categoriesReducer'
import servicesReducer from './reducers/servicesReducer'
import supercategoriesReducer from './reducers/supercategoriesReducer'
import serviceReducer from './reducers/serviceReducer'

const rootReducer = combineReducers({
  app: appReducer,
  supercategories: supercategoriesReducer,
  categories: categoriesReducer,
  services: servicesReducer,
  service: serviceReducer,
})

export default rootReducer