import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Services from './containers/services/Services'
import './App.scss'
import Categories from './containers/categories/Categories';
import store from './store/store';
import { Provider } from 'react-redux';



const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Services} />
          <Route path="/categories/:id" component={Categories} />
        </Switch>
      </Layout>
    </Provider>
    )
}

export default App