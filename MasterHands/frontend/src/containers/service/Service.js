import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './service.scss'
import { useSelector } from 'react-redux'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import PopupService from '../../components/popup-service/PopupService'


const Service = () => {

  const service = useSelector(state => state.service);
  const popup = useSelector(state => state.app.popupVisible);

  return (
    <>
      <Breadcrumbs serviceName={service.service_name} />
      <Loader />
      <ServiceBody price={service.price} />
      { popup ? <PopupService /> : null }
      { popup ? <Backdrop /> : null }
    </>
  )
}

export default Service