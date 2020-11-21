import React from 'react'
import './Loader.scss'

const Loader = () => {
  
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

export default Loader