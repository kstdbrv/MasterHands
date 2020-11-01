import React from 'react'
import { useDispatch } from 'react-redux'
import './popup-service.scss'
import { hidePopup } from '../../store/actions/app'



const PopupService = () => {

  const dispatch = useDispatch();

  return (
    <button onClick={ ()=> (dispatch(hidePopup())) }>click me</button>
  )
}

export default PopupService