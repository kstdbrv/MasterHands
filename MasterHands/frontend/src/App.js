import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Categories from './containers/categories/Categories'
import Documents from './components/Documents/Documents'
import DocumentsCondition from './components/documents-condition/DocumentsCondition'
import Service from './containers/service/Service'
import CategoriesGrid from './containers/categories-grid/CategoriesGrid'
import Subcategories from './containers/subcategories/Subcategories'
import Services from './containers/services/Services'
import BecomeMaster from './components/become-master/BecomeMaster'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
import Auth from './components/auth/Auth'
import Questionnaire from './components/questionnaire/Questionnaire'
import Vacansies from './components/vacansies/Vacansies'
import './App.scss'


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories-grid" component={CategoriesGrid} />
        <Route path="/categories/:id" component={Subcategories} />
        <Route path="/subcategories/:id" component={Services} />
        <Route path="/services/:id" component={Service} />
        <Route path="/documents" component={Documents} />
        <Route path="/documentsCondition" component={DocumentsCondition} />
        <Route path="/become-master" component={BecomeMaster} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/auth" component={Auth} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/vacansies" component={Vacansies} />
      </Switch>
    </Layout>
  )
}

export default App