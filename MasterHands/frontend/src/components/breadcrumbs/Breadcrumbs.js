import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = (props) => {

  let categories = useSelector(state => state.categories);
  let services = useSelector(state => state.services);
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
          categories.name && !props.deleteNextLinks ?
            <li className="breadcrumbs__list-item">
              <Link to={`/categories/${id.categories}`}>
                {categories.name}
              </Link>
            </li> : null
        }
        {
          !props.deleteNextLinks && !props.deleteServicesBreadcrmb && services.name
            ? <li className="breadcrumbs__list-item">
              <Link to={`/subcategories/${id.services}`}>
                {services.name}
              </Link>
            </li>
            : null
        }
        {
          props.serviceName ?
            <li className="breadcrumbs__list-item">
              <p>
                {props.serviceName}
              </p>
            </li> : null
        }
      </ul>
    </div>
  )
}

export default React.memo(Breadcrumbs)