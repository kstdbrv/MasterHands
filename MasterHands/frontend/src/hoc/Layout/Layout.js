import React from 'react'
import './layout.scss'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Layout = props => {
  return (
    <div className="wrapper">
      <Header />
        <main className="container">
          {props.children}
        </main>
      <Footer />
    </div>
  )
}

export default React.memo(Layout)

// React.memo hoc, нужен для оптимизации процессов (производительность)
// React сравнивает предыдущие и текущие свойства и состояния компонента. 
// И только если они неидентичны, компонент - функция перерисовывается