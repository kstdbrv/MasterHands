import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Services from './containers/services/Services'
import './app.scss'
import Categories from './containers/categories/Categories'
import store from './store/store'
import { Provider } from 'react-redux'
import Documents from './components/documents/Documents'
import DocumentsCondition from './components/documents-condition/DocumentsCondition'



const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Services} />
          <Route path="/categories/:id" component={Categories} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentsCondition" component={DocumentsCondition} />
        </Switch>
      </Layout>
    </Provider>
    )
}

export default App