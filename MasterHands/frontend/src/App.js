import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Services from './containers/services/Services'

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Services} />
        </Switch>
      </Layout>
    )
}

export default App






/* const  BaseLayout  = () => (
  <div  className="container-fluid">
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
          <a  className="navbar-brand"  href="#">Django React Demo</a>
          <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
          <div  className="navbar-nav">
              <a  className="nav-item nav-link"  href="/">CUSTOMERS</a>
              <a  className="nav-item nav-link"  href="/customer">CREATE CUSTOMER</a>
          </div>
      </div>
      </nav>
      <div  className="content">
          <Route  path="/"  exact  component={CategoriesList}  />
      </div>
  </div>
  )

  class  App  extends  Component {

    render() {
        return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
        );
    }
    }
    export  default  App; */