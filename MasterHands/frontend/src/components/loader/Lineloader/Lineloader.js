import React from 'react'
import { useSelector } from 'react-redux'
import './Lineloader.scss'


export default function Lineloader() {

  // const loading = useSelector(state => state.app.isLoading)

  // if (!loading) {
  //   return null
  // }
  return (
    <React.Fragment>
      <div className="main_body">
        <div className="element">
          <div className="loading3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}