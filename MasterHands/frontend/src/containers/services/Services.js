import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getService, onEmptyStore } from '../../store/actions/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { GET_SERVICES } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Loader from '../../components/loader/Loader'
import FetchedLoader from '../../components/loader/FetchLoader/FetchLoader'
import BreadcrumbsLoader from '../../components/loader/BreadcrumbsLoader/BreadcrumbsLoader'
import FetchedBreadcrumbsLoader from '../../components/loader/FetchedBreadcrumbsLoader/FetchedBreadcrumbsLoader'
import ServicesText from '../../components/services-text/ServicesText'
import getNumber from '../../utils/utils'
import './Services.scss'

const Services = () => {
  const [isLoading, setisLoading] = useState(false)
  const isFetched = useSelector(state => state.app.isLoading)


  const dispatch = useDispatch()
  const supercategories = useSelector(state => state.supercategories)
  const services = useSelector(state => state.services)

  useEffect(() => {
    if (!supercategories.length) {
      getNumber(window.location.pathname);

      function getNumber(string) {
        let id = parseInt(string.replace(/[^\d]/g, ''))
        dispatch(onEmptyStore(id, GET_SERVICES))
      }
    }
    setisLoading(true)
  }, [])

  return (
    <React.Fragment>
      {isLoading
        ? !isFetched ? <Breadcrumbs /> : <FetchedBreadcrumbsLoader />
        : <BreadcrumbsLoader />}

      <div className="services">
        <div className="services__list">
          {isLoading
            ? !isFetched
              ? services.services.map(services => (
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
              : <FetchedLoader />
            : <Loader />
          }
        </div>
        <ServicesText />
      </div>
    </React.Fragment>
  )

}

export default React.memo(Services)