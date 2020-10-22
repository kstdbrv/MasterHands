import React, { useState } from 'react'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from '../../store/actions'
import { useMemo } from 'react'






const Subcategories = (props) => {

  const [servicesId, setServicesId] = useState({})

  const dispatch = useDispatch();
  const categories = useSelector(state => state.services.categories);
  const services = useSelector(state => state.services.services);

  function getServices(id) {
    setServicesId({servicesId: id})
    console.log(id)
    if (services.services.length/*  && nextProps.id !== prevProps.id */) {
      dispatch(fetchServices(`/subcategories/${id}`))
    }
  }

  useMemo(() => (
    () => (
      console.log('memo works'),
      getServices(props.match.params.id) 
    )
  ),[servicesId])
    
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



export default Subcategories;