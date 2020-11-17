import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getServices, onEmptyStore } from '../../store/actions/quiz'
import { GET_СATEGORIES } from '../../store/actions/actionTypes'
import Loader from '../../components/loader/Loader'
import FetchedLoader from '../../components/loader/FetchLoader/FetchLoader'
import BreadcrumbsLoader from '../../components/loader/BreadcrumbsLoader/BreadcrumbsLoader'
import FetchedBreadcrumbsLoader from '../../components/loader/FetchedBreadcrumbsLoader/FetchedBreadcrumbsLoader'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import getNumber from '../../utils/utils'
import './subcategories.scss'


const Subcategories = () => {
  const [isLoading, setisLoading] = useState(false)
  const isFetched = useSelector(state => state.app.isLoading)

  const dispatch = useDispatch()
  const supercategories = useSelector(state => state.supercategories)
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    if (!supercategories.length) {
      let id = getNumber(window.location.pathname)
      dispatch(onEmptyStore(id, GET_СATEGORIES))
    }
    setisLoading(true)
  }, [])

  return (
    <React.Fragment>
      {isLoading
        ? !isFetched ? <Breadcrumbs deleteServicesBreadcrmb={categories.id} /> : <FetchedBreadcrumbsLoader />
        : <BreadcrumbsLoader />}
      <ul className="subcategories__list">
        {isLoading
          ? !isFetched
            ? categories.children.map(s => {
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
            : <FetchedLoader />
          : <Loader />
        }
      </ul>
    </React.Fragment>
  )
}

export default React.memo(Subcategories)