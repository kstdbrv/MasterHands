import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories, getСategories } from '../../store/actions/quiz'
import { serviceEnding } from '../../utils/utils'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import Loader from '../../components/loader/Loader'
import FetchedLoader from '../../components/loader/FetchLoader/FetchLoader'
import BreadcrumbsLoader from '../../components/loader/BreadcrumbsLoader/BreadcrumbsLoader'
import FetchedBreadcrumbsLoader from '../../components/loader/FetchedBreadcrumbsLoader/FetchedBreadcrumbsLoader'
import './categories-grid.scss'

const CategoriesGrid = () => {
  const [isLoading, setisLoading] = useState(false)
  const isFetched = useSelector(state => state.app.isLoading)

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.supercategories);

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
    setisLoading(true)
  }, [])

  const renderCategories = () => {
    return (
      supercategories.map(supercategory => (
        <React.Fragment key={supercategory.id}>
          {
            supercategory.children.map(category => (
              <li key={category.id}>
                <Link
                  className="grids__item"
                  to={`/categories/${category.id}`}
                  onClick={() => (dispatch(getСategories(category.id)))}
                >
                  <div className="grids__item-info">
                    <span
                      className="grids__item-name"
                    >{category.name}</span>
                    <div className="grids__item-num">
                      <span>{category.services_count}</span> &nbsp;
                      <span>{serviceEnding(category.services_count)}</span>
                      <ArrowLink />
                    </div>
                  </div>
                  <div className="grids__item-img">
                    {
                      category.name === "IKEA" ? <img className="grids__item-ikea" src={category.svg_icon} alt="иконка" />
                        : <img src={category.svg_icon} alt="иконка" />
                    }
                  </div>
                </Link>
              </li>
            ))
          }
        </React.Fragment>
      ))
    )
  }

  return (
    <React.Fragment>
      {isLoading
        ? !isFetched
          ? <Breadcrumbs deleteNextLinks={true} />
          : <FetchedBreadcrumbsLoader />
        : <BreadcrumbsLoader />}
      <section className="grids">
        <ul className="grids__list">
          {isLoading
            ? !isFetched
              ? renderCategories()
              : <FetchedLoader />
            : <Loader />}
        </ul>
      </section>
    </React.Fragment>
  )
}

export default React.memo(CategoriesGrid)