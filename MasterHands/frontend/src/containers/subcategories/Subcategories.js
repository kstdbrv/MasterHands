
import React, { useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { useSelector, useDispatch } from 'react-redux'
import { getServices } from '../../store/actions/quiz'


const Subcategories = (props) => {
  console.log(props.location.pathname)

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);


  return (
    <>
      <Breadcrumbs deleteServicesBreadcrmb={ categories.id } />
      <ul className="subcategories__list">
        <Loader />
      {
       categories.children.map(s => {
          return (
          <li key={s.id}>  
              <Link
                to={`/subcategories/${s.id}`}
                className="subcategories__item"
                onClick={() => (dispatch(getServices(s.id)))}
              >
              {s.name}
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