import { combineReducers } from 'redux'
import appReducer from './appReducer'
import categoriesReducer from './categoriesReducer'
import servicesReducer from './servicesReducer'
import supercategoriesReducer from './supercategoriesReducer'
import serviceReducer from './serviceReducer'

const rootReducer = combineReducers({
  app: appReducer,
  supercategories: supercategoriesReducer,
  categories: categoriesReducer,
  services: servicesReducer,
  service: serviceReducer
})

export default rootReducer