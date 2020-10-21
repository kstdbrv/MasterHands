import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Categories from './containers/categories/Categories'
import './app.scss'
import Documents from './components/documents/Documents'
import DocumentsCondition from './components/documents-condition/DocumentsCondition'
import Service from './containers/service/Service'
import Service2 from './containers/service/service2'
import CategoriesGrid from './containers/categories-grid/CategoriesGrid'
import Subcategories from './containers/subcategories/Subcategories'
import Services from './containers/services/Services'
import Services2 from './containers/services/services2'
import BecomeMaster from './components/become-master/BecomeMaster'
import Contacts from './components/contacts/Contacts'


const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories-grid" component={CategoriesGrid} />
          <Route path="/categories/:id" component={Subcategories} />
          <Route path="/subcategories/:id" component={Services2} />
          <Route path="/services/:id" component={Service2} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentsCondition" component={DocumentsCondition} />
          <Route path="/become-master" component={BecomeMaster} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Layout>
  )
}

export default App