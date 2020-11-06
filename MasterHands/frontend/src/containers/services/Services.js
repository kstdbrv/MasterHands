import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './Services.scss'
import { getService } from '../../store/actions/quiz'
import { useSelector, useDispatch } from 'react-redux'
import ServicesText from '../../components/services-text/ServicesText'


const Services = () => {

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])

  const dispatch = useDispatch();
  const services = useSelector(state => state.services);

    return (
    <>
      <Breadcrumbs />    
      <div className="services">
        <div className="services__list">
          <Loader />  
        {
         services.services.map(s => (
          <Link
           to={`/services/${s.id}`} key={s.id}
             onClick={() => {dispatch(getService(s.id))}}
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