import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './services.scss'
import { fetchService } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import ServicesText from '../../components/services-text/ServicesText'


const Services = () => {

  const dispatch = useDispatch();
  const subcategories = useSelector(state => state.services.services);
  const service = useSelector(state => state.services.service);

  const getService = id => {
    if (service.length === 0) {
      dispatch(fetchService(`/services/${id}`))
    }
  }

    return (
    <>
      <Loader />  
      <Breadcrumbs
/*         categoryName={}
        subcategoryName={state.subcategories.subcategory_name}  */ 
      />    
      <div className="services__list">
      {
       subcategories.services.map(s => (
        <Link
         to={`/services/${s.id}`} key={s.id}
         onClick={() => getService(s.id)}
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
    </>
    )
  
}

export default Services