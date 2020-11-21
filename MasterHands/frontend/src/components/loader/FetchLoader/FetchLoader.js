import React from 'react'
import { useSelector } from 'react-redux'
import './FetchLoader.scss'

export default function FetchedLoader() {

  const loading = useSelector(state => state.app.isLoading)

  if (!loading) {
    return null
  }
  return (
    <React.Fragment>
      <div className='loader-centre'>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>


  )
}