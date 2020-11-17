import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onEmptyStore, getСategories } from '../../store/actions/quiz'
import { GET_SERVICE } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Loader from '../../components/loader/Loader'
import FetchedLoader from '../../components/loader/FetchLoader/FetchLoader'
import BreadcrumbsLoader from '../../components/loader/BreadcrumbsLoader/BreadcrumbsLoader'
import FetchedBreadcrumbsLoader from '../../components/loader/FetchedBreadcrumbsLoader/FetchedBreadcrumbsLoader'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import PopupService from '../../components/popup-service/PopupService'
import getNumber from '../../utils/utils'
import './service.scss'

const Service = () => {
  const [isLoading, setisLoading] = useState(false)
  const [localCategories, setlocalCategories] = useState([]);
  const [localServices, setlocalServices] = useState([]);

  const dispatch = useDispatch()

  const supercategories = useSelector(state => state.supercategories);
  const categories = useSelector(state => state.categories)
  const services = useSelector(state => state.services)
  const service = useSelector(state => state.service);
  const isFetched = useSelector(state => state.app.isLoading)
  const popup = useSelector(state => state.app.popupVisible);
  const searcService = useSelector(state => state.searchService); // ??? шо это такое и для чего?

  useEffect(() => {
    if (localCategories != categories) {
      setlocalCategories(categories)
    }
  }, [categories]);

  useEffect(() => {
    if (localServices != services) {
      setlocalServices(services)
    }
  }, [services]);

  useEffect(() => {
    if (localCategories) {
      dispatch(getСategories(localServices.parent_id))
    }
  }, [localCategories, dispatch])

  useEffect(() => {
    if (!supercategories.length) {
      getNumber(window.location.pathname);

      function getNumber(string) {
        let id = parseInt(string.replace(/[^\d]/g, ''))
        dispatch(onEmptyStore(id, GET_SERVICE))
      }
    }
    setisLoading(true)
  }, [])

  return (
    <React.Fragment>
      {isLoading
        ? !isFetched
          ? <Breadcrumbs serviceName={service.service_name ? service.service_name : null} />
          : <FetchedBreadcrumbsLoader />
        : <BreadcrumbsLoader />}
      { isLoading
        ? !isFetched
          ? <ServiceBody price={service ? service.price : searcService.price} serviceName={service ? service.service_name : searcService.service_name} />
          : <FetchedLoader />
        : <Loader />
      }
      {popup ? <PopupService /> : null}
      {popup ? <Backdrop /> : null}
    </React.Fragment>
  )
}

export default React.memo(Service)