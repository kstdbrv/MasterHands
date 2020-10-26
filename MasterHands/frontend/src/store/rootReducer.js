import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import categoriesReducer from './reducers/categoriesReducer'
import servicesReducer from './reducers/servicesReducer'
import supercategoriesReducer from './reducers/supercategoriesReducer'
import serviceReducer from './reducers/serviceReducer'
import linkReducer from './reducers/linkReducer'

const rootReducer = combineReducers({
  app: appReducer,
  supercategories: supercategoriesReducer,
  categories: categoriesReducer,
  services: servicesReducer,
  service: serviceReducer,
  prevlink: linkReducer,
})

export default rootReducer