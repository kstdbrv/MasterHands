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
          <li className="breadcrumbs__list-item">
            <Link to="#">
              {props.categoryName} электрика
            </Link>
          </li>
{/*           <li className="breadcrumbs__list-item">
            <Link to="#">
              {props.subcategoryName}
            </Link>
          </li> */}
{/*           <li className="breadcrumbs__list-item">
            <Link to="#">
              {props.serviceName}
            </Link>
          </li>   */}
        </ul>
      </div>
  )
}

export default Breadcrumbs