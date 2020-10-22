import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Loader } from '../../components/loader/Loader'
import './service.scss'
import { useSelector } from 'react-redux'
import ServiceBody from '../../components/service-body/ServiceBody'


const Service = () => {

  const service = useSelector(state => state.services.service)

  return (
    <>
      <Loader />
      <Breadcrumbs
        categoryName={service.category}
        subcategoryName={service.subcategory}
        serviceName={service.service_name}
      />
      <ServiceBody price={service.price} />
    </>
  )
}

export default Service