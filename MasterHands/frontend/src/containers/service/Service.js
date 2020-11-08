import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './service.scss'
import { useSelector } from 'react-redux'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import { onEmptyStore } from '../../store/actions/quiz'
import PopupService from '../../components/popup-service/PopupService'
import { GET_SERVICE } from '../../store/actions/actionTypes'
import getNumber from '../../utils/utils'

const Service = () => {

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      let id = getNumber(window.location.pathname);
      dispatch(onEmptyStore(id, GET_SERVICE));
    } 
  }, [])

  const service = useSelector(state => state.service);

  const popup = useSelector(state => state.app.popupVisible);
  const searcService = useSelector(state => state.searchService)
  return (
    <>
      <Breadcrumbs serviceName={service.service_name ? service.service_name : null} />
      <Loader />
      <ServiceBody price={service.price ? service.price : searcService.price} serviceName ={service.service_name ? service.service_name : searcService.service_name} />
      {popup ? <PopupService /> : null}
      {popup ? <Backdrop /> : null}
    </>
  )
}

export default Service