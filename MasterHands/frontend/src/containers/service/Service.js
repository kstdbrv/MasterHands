import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './service.scss'

const categoryService = new CategoriesService()

const Service = () => {

  const [state, setState] = useState({
    service: {},
    isLoaded: false
  })

  useEffect(() => {
    categoryService.getCategoriesByURL(window.location.pathname).then(result => {
      setState({
        service: result,
        isLoaded: true
      })
    })
},[])

  if (!state.isLoaded) {
    return <Loader />
  } else {
    return (
      <React.Fragment key={state.service.id}>
{/*         <Breadcrumbs
          categoryName={state.service.category}
          subcategoryName={state.service.subcategory}
          serviceName={state.service.service_name}
        /> */}
        <p>{state.service.service_name}</p>
        <p>{state.service.price}</p>
      </React.Fragment>
    )
  }
}


export default Service