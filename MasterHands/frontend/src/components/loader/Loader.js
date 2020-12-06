import React from 'react'
import { useSelector } from 'react-redux'
import './Loader.scss'

const Loader = () => {

  const loading = useSelector(state => state.app.isLoading)

  if (!loading) {
   return null
  } else {
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
}

export default Loader