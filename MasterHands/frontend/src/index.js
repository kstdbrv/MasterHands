import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { hydrate } from 'react-dom'



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)  

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>
)

hydrate(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
