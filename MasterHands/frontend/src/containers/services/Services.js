import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './services.scss'
import { fetchService } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'

const Services = () => {

  const dispatch = useDispatch();
  const subcategories = useSelector(state => state.services.services);


    return (
    <>
      <Loader />  
      <Breadcrumbs
/*         categoryName={}
        subcategoryName={state.subcategories.subcategory_name}  */ 
      />    
      <h1>{subcategories.subcategory_name}</h1>
      {
       subcategories.services.map(s => {
        return (
          <Link
            to={`/services/${s.id}`} key={s.id}
            onClick={ () => dispatch(fetchService(`/services/${s.id}`)) }
          >
           <p>{s.service_name}</p>
           <p>{s.price}</p>
          </Link> 
         )
       })
      }
    </>
    )
  
}

export default Services