import React from 'react'
import './BreadcrumbsLoader.scss'


export default function BreadcrumbsLoader() {

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