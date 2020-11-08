import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './service.scss'
import { useSelector } from 'react-redux'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import PopupService from '../../components/popup-service/PopupService'
import { fetchSupercategories } from '../../store/actions/quiz'

const Service = () => {

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
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