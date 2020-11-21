import React from 'react'
import { useSelector } from 'react-redux'
import './FetchedBreadcrumbsLoader.scss'


export default function FetchedBreadcrumbsLoader() {

  const loading = useSelector(state => state.app.isLoading)

  if (!loading) {
    return null
  }
  return (
    <React.Fragment>
      <div className='BreadcrumbsLoader-centre'>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}