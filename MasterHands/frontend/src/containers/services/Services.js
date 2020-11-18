import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './Services.scss'
import { getService } from '../../store/actions/quiz'
import { useSelector, useDispatch } from 'react-redux'
import ServicesText from '../../components/services-text/ServicesText'
import { onEmptyStore } from '../../store/actions/quiz'
import { GET_SERVICES } from '../../store/actions/actionTypes'
import getNumber from '../../utils/utils'

const Services = () => {
  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      getNumber(window.location.pathname);
      console.log(window.location.pathname)

      function getNumber(string) {
        let id = parseInt(string.replace(/[^\d]/g, ''))
        console.log(id)
        dispatch(onEmptyStore(id, GET_SERVICES))
      }
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
                onClick={() => { dispatch(getService(s.id)) }}
                className="services__item"
              >
                <p>{s.service_name}</p>
                <div className="services__price">
                  <span>{s.price}</span>
                  <span> ₽</span>
                </div>
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