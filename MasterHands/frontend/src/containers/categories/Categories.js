import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './Categories.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions/quiz'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { getСategories } from '../../store/actions/quiz'
import { serviceEnding } from '../../utils/utils'



const Categories = () => {

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.supercategories);
  const services = useRef(null) // prevent render

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])

  let serviceQty = []
  let allServices = []


  const renderCategories = () => {

    return supercategories.map(s => {
      serviceQty.push(s.services_count)
      let servicesTotalQty = serviceQty.reduce((prev, next) => prev + next, 0)
      services.current = servicesTotalQty

      return (
        <React.Fragment key={s.id}>
          <li className="list-service__title">
            <p>{s.name}</p>
          </li>
          {s.children.map(c => (
            <li key={c.id}>
                <Link className="list-service__item"
                  to={`/categories/${c.id}`}
                  onClick={() => (dispatch(getСategories(c.id)))}
                >
                 <div className="list-service__left">
                  {
                    c.name === "IKEA" ? <img className="list-service__ikea" src={c.svg_icon} alt="иконка" />
                                      : <img src={c.svg_icon} alt="иконка" />
                  }
                  <span className="list-service__name">{c.name}</span>
                 </div>
                <div className="list-service__num">
                  <span>{c.services_count}</span>
                  <span>{serviceEnding(c.services_count)}</span>
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
    <>
      <Search serviceQty={services} />
      <section className="categories">
        <div className="categories__inner">
          <div className="service__list list-service">
            <ul className="list-service__list">
              <Loader />
              {renderCategories()}
            </ul>
          </div>
          <ServicesRight />
        </div>
      </section>
    </>
  )
}

export default Categories;
