import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import { Loader } from '../../components/loader/Loader'
import './services.scss'

const categoryService = new CategoriesService()

const Services = () => {

  const [state, setState] = useState({
    subcategories: [],
    isLoaded: false
  })

  useEffect(() => {
    categoryService.getCategoriesByURL(window.location.pathname).then(result => {
      setState({
        subcategories: result,
        isLoaded: true
      })
    })
},[])

  if (!state.isLoaded) {
    return <Loader />
  } else {
    return (
    <>
      <h1>{state.subcategories.subcategory_name}</h1>
      {
       state.subcategories.services.map(s => {
        return (
          <React.Fragment key={s.id}>
           <p>{s.service_name}</p>
           <p>{s.price}</p>
          </React.Fragment>
         )
       })
      }
    </>
    )
  }
}

export default Services