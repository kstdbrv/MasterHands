import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = (props) => {

  let { category_name } = useSelector(state => state.categories);
  let { subcategory_name } = useSelector(state => state.services);

  let id = useSelector(state => state.app);
   
  return (
    <div className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link to="/categories-grid">
              Услуги
            </Link>
          </li>
          {
           category_name && !props.deleteNextLinks ?
          <li className="breadcrumbs__list-item">
            <Link to={ `/categories/${id.categoriesId}` }>
              { category_name }
            </Link>
          </li> : null
          }
          {
            !props.deleteNextLinks && !props.deleteServicesBreadcrmb ?
          <li className="breadcrumbs__list-item">
            <Link to={ `/subcategories/${id.servicesId}` }>
              { subcategory_name }
            </Link>
          </li> : null
          }
          {
            props.serviceName ? 
            <li className="breadcrumbs__list-item">
              <p>
                { props.serviceName }
              </p>
            </li> : null  
          }
        </ul>
      </div>
  )
}

export default Breadcrumbs