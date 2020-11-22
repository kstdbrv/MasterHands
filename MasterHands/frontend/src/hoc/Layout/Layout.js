import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Layout = props => {
  return (
    <>
      <Header />
        <main className="container">
          {props.children}
        </main>
      <Footer />
    </>
  )
}

export default React.memo(Layout)

// React.memo hoc, нужен для оптимизации процессов (производительность)
// React сравнивает предыдущие и текущие свойства и состояния компонента. 
// И только если они неидентичны, компонент - функция перерисовывается