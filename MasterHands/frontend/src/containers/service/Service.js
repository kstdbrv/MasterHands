import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onEmptyStore } from '../../store/actions/quiz'
import { GET_SERVICE } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ServiceBody from '../../components/service-body/ServiceBody'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import PopupService from '../../components/popup-service/PopupService'
import { getNumber } from '../../utils/utils'
import './service.scss'

const Service = () => {

  const dispatch = useDispatch()

  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  const supercategories = useSelector(state => state.supercategories);
  const service = useSelector(state => state.service);
  const popup = useSelector(state => state.app.popupVisible);


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