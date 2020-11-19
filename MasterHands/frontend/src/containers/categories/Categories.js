import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories, getСategories } from '../../store/actions/quiz'
import { serviceEnding } from '../../utils/utils'
import Loader from '../../components/loader/Loader'
import FetchedLoader from '../../components/loader/FetchLoader/FetchLoader.js'
import Search from '../../components/search/Search'
import ServicesRight from '../../components/services-right/ServicesRight'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import './Categories.scss'

const Categories = () => {
  const [isLoading, setisLoading] = useState(false)
  const isFetched = useSelector(state => state.app.isLoading)

  let serviceQty = []

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.supercategories);
  const services = useRef(null); //use state, but  prevent render

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
    window.scrollTo(0, 0);
    setisLoading(true)
  }, [])

  const renderCategories = () => {

    return supercategories.map(supercategory => {

      serviceQty.push(supercategory.services_count)
      let servicesTotalQty = serviceQty.reduce((prev, next) => prev + next, 0)
      services.current = servicesTotalQty

      return (
        <React.Fragment key={supercategory.id}>
          <li className="list-service__title">
            <p>{supercategory.name}</p>
          </li>
          {supercategory.children.map(category => (
            <li key={category.id}>
              <Link className="list-service__item"
                to={`/categories/${category.id}`}
                onClick={() => (dispatch(getСategories(category.id)))}
              >
                <div className="list-service__left">
                  {
                    category.name === "IKEA" ? <img className="list-service__ikea" src={category.svg_icon} alt="иконка" />
                      : <img src={category.svg_icon} alt="иконка" />
                  }
                  <span className="list-service__name">{category.name}</span>
                </div>
                <div className="list-service__num">
                  <span>{category.services_count}</span>
                  <span>{serviceEnding(category.services_count)}</span>
                  <ArrowLink />
                </div>
              </Link>
            </li>
          ))
          }
        </React.Fragment>
      )
    })
  }

  return (
    <React.Fragment>
      <Search serviceQty={services} />
      <section className="categories">
        <div className="categories__inner">
          <div className="service__list list-service">
            <ul className="list-service__list">
              {isLoading
                ? !isFetched ? renderCategories() : <FetchedLoader />
                : <Loader />}
            </ul>
          </div>
          <ServicesRight />
        </div>
      </section>
    </React.Fragment>
  )
}

export default React.memo(Categories)
