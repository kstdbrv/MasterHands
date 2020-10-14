
import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import Services from '../../containers/services/Services'


const Layout = props => {
  return (
  <>
    <Header />
     <div className="container">
      <main>
       { props.children }
      </main>
     </div>
    <Footer />
  </>
 )
}

export default Layout