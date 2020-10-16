import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Services from './containers/services/Services'
import './App.scss'
import { Categories } from './containers/categories/Categories'
import { Documents } from './components/Documents/Documents'
import DocumentsCondition from './components/DocumentsCondition/DocumentsCondition'

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Services} />
          <Route path="/categories/:name" component={Categories} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentsCondition" component={DocumentsCondition} />
        </Switch>
      </Layout>
    )
}

export default App