
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default React.memo(Layout)