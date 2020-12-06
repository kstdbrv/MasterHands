import React from 'react'
import './FetchLoader.scss'

export default function FetchedLoader() {

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