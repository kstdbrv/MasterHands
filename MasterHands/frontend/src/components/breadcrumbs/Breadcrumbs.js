import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = ({ serviceName }) => {

  let { category_name } = useSelector(state => state.categories);
  let { subcategory_name } = useSelector(state => state.services);

  let link = useSelector(state => state.prevlink);
   
  return (
    <div className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link to="/categories-grid">
              Услуги
            </Link>
          </li>
          {
           category_name ?
          <li className="breadcrumbs__list-item">
            <Link to={ link.categoriesLink }>
              { category_name }
            </Link>
          </li> : null
          }
          {
          subcategory_name ?
          <li className="breadcrumbs__list-item">
            <Link to={ link.servicesLink }>
              { subcategory_name }
            </Link>
          </li> : null
          }
          {
            serviceName ? 
            <li className="breadcrumbs__list-item">
              <p>
                { serviceName }
              </p>
            </li> : null  
          }
        </ul>
      </div>
  )
}

export default Breadcrumbs