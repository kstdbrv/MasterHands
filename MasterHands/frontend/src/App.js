import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Services from './containers/services/Services'
import './App.scss'
import { Categories } from './containers/categories/Categories'

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Services} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </Layout>
    )
}

export default App