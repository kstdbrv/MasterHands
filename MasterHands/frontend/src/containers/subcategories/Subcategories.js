import React, { useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { useSelector, useDispatch } from 'react-redux'
import { getServices } from '../../store/actions/quiz'
import { onEmptyStore } from '../../store/actions/quiz'
import { GET_СATEGORIES } from '../../store/actions/actionTypes'
import getNumber from '../../utils/utils'


const Subcategories = () => {

  const supercategories = useSelector(state => state.supercategories);
  useEffect(() => {
    if (!supercategories.length) {
      let id = getNumber(window.location.pathname);
      dispatch(onEmptyStore(id, GET_СATEGORIES));
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