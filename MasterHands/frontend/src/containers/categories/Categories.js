import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './Categories.scss'
import lamp from '../../assets/images/lamp.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions/quiz'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { getСategories } from '../../store/actions/quiz'


const Categories = () => {

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.supercategories);

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])

  function serviceEnding(number) {
    const arr = String(number).split("")
    if (arr[arr.length - 2] == '1') return 'Услуг'
    else if (arr[arr.length - 1] === '1') return 'Услуга'
    else if (arr[arr.length - 1] === '2' || arr[arr.length - 1] === '3' || arr[arr.length - 1] === '4') return 'Услуги'
    return 'Услуг'
  }

  const renderCategories = () => {
    return (
      supercategories.map(s => (
        <React.Fragment key={s.id}>
          <li className="list-service__title">
            <p>{s.name}</p>
          </li>
          {
            s.children.map(c => (
            <li key={c.id}>
                <Link className="list-service__item"
                  to={`/categories/${c.id}`}
                  onClick={() => (dispatch(getСategories(c.id)))}
                >
                <p>
                  <img src={lamp} alt="иконка" />
                  <span className="list-service__name">{c.name}</span>
                </p>
                <p className="list-service__num">
                  <span>{c.services_count}</span>
                  <span>{serviceEnding(c.services_count)}</span>
                  <ArrowLink />
                </p>  
              </Link>
            </li>
            ))
          }
        </React.Fragment>
      ))
    )
  }

  return (
    <>
      <Search />
      <section className="categories">
        <div className="categories__inner">
          <div className="service__list list-service">
            <ul className="list-service__list">
              <Loader />
              { renderCategories() }
            </ul>
          </div>
          <ServicesRight />
        </div>
      </section>
    </>
  )
}

export default Categories;
