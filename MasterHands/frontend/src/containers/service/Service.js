import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onEmptyStore, getСategories } from '../../store/actions/quiz'
import { GET_SERVICE } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import PopupService from '../../components/popup-service/PopupService'
import { getNumber } from '../../utils/utils'
import './service.scss'

const Service = () => {

  const [localCategories, setlocalCategories] = useState([]);
  const [localServices, setlocalServices] = useState([]);

  const dispatch = useDispatch()

  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  const supercategories = useSelector(state => state.supercategories);
  const categories = useSelector(state => state.categories)
  const services = useSelector(state => state.services)
  const service = useSelector(state => state.service);
  const isFetched = useSelector(state => state.app.isLoading)
  const popup = useSelector(state => state.app.popupVisible);

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
      let id = getNumber(window.location.pathname)
      dispatch(onEmptyStore(id, GET_SERVICE))
    }
  }, [])

  return (
    <React.Fragment>
      <Breadcrumbs serviceName={service.service_name} />
      <ServiceBody price={service.price} serviceName={service.service_name} />
      {popup ? <PopupService /> : null}
      {popup ? <Backdrop /> : null}
    </React.Fragment>
  )
}

export default React.memo(Service)