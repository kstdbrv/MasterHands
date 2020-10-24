import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './Services.scss'
import { fetchService } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import ServicesText from '../../components/services-text/ServicesText'
import { setServiceLink } from '../../store/actions'


const Services = () => {

  const dispatch = useDispatch();
  const subcategories = useSelector(state => state.services);

    return (
    <>
      <Loader />   
      <Breadcrumbs
/*         categoryName={}
        subcategoryName={state.subcategories.subcategory_name}  */ 
      />    
      <div className="services">
        <div className="services__list">
        {
         subcategories.services.map(s => (
          <Link
           to={`/services/${s.id}`} key={s.id}
             onClick={() => {
               dispatch(fetchService(`/services/${s.id}`))
               dispatch(setServiceLink(`/services/${s.id}`));
           }}
           className="services__item"  
          >
          <p>{s.service_name}</p>
          <span className="services__price">
            <span>{s.price}</span>
            <span> ₽</span> 
          </span>
          </Link> 
         ))
        }    
        </div>
        <ServicesText />
      </div>  
    </>
    )
  
}

export default Services