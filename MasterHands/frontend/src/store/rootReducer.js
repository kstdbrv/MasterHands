import { combineReducers } from 'redux'
import appReducer from './appReducer'
import servicesReducer from './servicesReducer'



const rootReducer = combineReducers({
  services: servicesReducer,
  app: appReducer
})

export default rootReducer