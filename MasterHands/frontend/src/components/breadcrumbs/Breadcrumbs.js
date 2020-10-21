import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link to="/categories-grid">
              Услуги
            </Link>
          </li>
          {
           props.categoryName ?
          <li className="breadcrumbs__list-item">
            <Link to="#">
              {props.categoryName}
            </Link>
          </li> : null
          }
          {
          props.subcategoryName ?
          <li className="breadcrumbs__list-item">
            <Link to="#">
              {props.subcategoryName}
            </Link>
          </li> : null
          }
          {
            props.serviceName ? 
            <li className="breadcrumbs__list-item">
              <Link to="#">
                {props.serviceName}
              </Link>
            </li> : null  
          }
        </ul>
      </div>
  )
}

export default Breadcrumbs