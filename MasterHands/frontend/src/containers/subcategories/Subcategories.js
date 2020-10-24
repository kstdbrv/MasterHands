
import React from 'react'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from '../../store/actions'
import { setServicesLink } from '../../store/actions'

const Subcategories = () => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  return (
    <>
      <Loader />
      <Breadcrumbs
       /* categoryName={categories.category_name}  электрика */
      />
      <ul className="subcategories__list">
      {
       categories.subcategory.map(s => {
          return (
          <li key={s.id}>  
              <Link
                to={`/subcategories/${s.id}`}
                className="subcategories__item"
                onClick={() => {
                  dispatch(fetchServices(`/subcategories/${s.id}`));
                  dispatch(setServicesLink(`/subcategories/${s.id}`));
                }}
              >
              {s.subcategory_name}
              <ArrowLink />
            </Link>
          </li>
          )
        })
      }
      </ul>
    </>
  )
}

export default Subcategories;





/* import React from 'react'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from '../../store/actions'


const Subcategories = () => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.services.categories);
  const services = useSelector(state => state.services.services);

  const getServices = id => {
    if (services.services.length === 0) {
      dispatch(fetchServices(`/subcategories/${id}`))
    }
  }
  
  return (
    <>
      <Loader />
      <Breadcrumbs />
      <ul className="subcategories__list">
      {
       categories.subcategory.map(s => {
          return (
          <li key={s.id}>  
              <Link
                to={`/subcategories/${s.id}`}
                className="subcategories__item"
                onClick={ () => getServices(s.id) }
              >
              {s.subcategory_name}
              <ArrowLink />
            </Link>
          </li>
          )
        })
      }
      </ul>
    </>
  )
}



export default Subcategories; */