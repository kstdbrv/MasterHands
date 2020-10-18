import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Categories from './containers/categories/Categories'
import './app.scss'
import store from './store/store'
import { Provider } from 'react-redux'
import Documents from './components/documents/Documents'
import DocumentsCondition from './components/documents-condition/DocumentsCondition'
import Service from './containers/service/Service'
import CategoriesGrid from './containers/categories-grid/CategoriesGrid'
import Subcategories from './containers/subcategories/Subcategories'
import Services from './containers/services/Services'

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories-grid" component={CategoriesGrid} />
          <Route path="/categories/:id" component={Subcategories} />
          <Route path="/subcategories/:id" component={Services} />
          <Route path="/services/:id" component={Service} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentsCondition" component={DocumentsCondition} />
        </Switch>
      </Layout>
    </Provider>
    )
}

export default App