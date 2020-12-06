import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getService, onEmptyStore } from '../../store/actions/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { GET_SERVICES } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ServicesText from '../../components/services-text/ServicesText'
import { getNumber } from '../../utils/utils'
import './Services.scss'

const Services = () => {

  const dispatch = useDispatch()
  const supercategories = useSelector(state => state.supercategories)
  const services = useSelector(state => state.services)

  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!supercategories.length) {
      let id = getNumber(window.location.pathname)
      dispatch(onEmptyStore(id, GET_SERVICES))
    }
  }, [])

  return (
    <React.Fragment>
      <Breadcrumbs />
      <div className="services">
        <div className="services__list">
          {
            services.services.map(services => (
                <Link
                  to={`/services/${services.id}`} key={services.id}
                  onClick={() => { dispatch(getService(services.id)) }}
                  className="services__item"
                >
                  <p>{services.service_name}</p>
                  <div className="services__price">
                    <span>{services.price}</span>
                    <span> ₽</span>
                  </div>
                </Link>
            ))
          }
        </div>
        <ServicesText />
      </div>
    </React.Fragment>
  )

}

export default React.memo(Services)