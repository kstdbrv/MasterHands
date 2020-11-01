import React from 'react'
import './backdrop.scss'
import { useDispatch } from 'react-redux'
import { hidePopup } from '../../../store/actions/app'




const Backdrop = () => {

  const dispatch = useDispatch();
  
  return (
    <div
    className="backdrop"
    onClick={() => (dispatch(hidePopup()))}
  />
  )
}

export default Backdrop