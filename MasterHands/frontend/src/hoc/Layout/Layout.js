import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import Services from '../../containers/services/Services'


const Layout = props => {
  return (
    <div className="container">
     <Header />
      <main>
        <Services />
       { props.children }
     </main>
     <Footer />
   </div>
 )
}

export default Layout