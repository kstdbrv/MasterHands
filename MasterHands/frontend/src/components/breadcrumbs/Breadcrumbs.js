import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link to="/categories-grid">
              Услуги
            </Link>
            <Link to="#">
              {props.categoryName}
            </Link>
            <Link to="#">
              {props.subcategoryName}
            </Link>
            <Link to="#">
              {props.serviceName}
            </Link>
          </li>  
        </ul>
      </div>
    </div>  
  )
}

export default Breadcrumbs