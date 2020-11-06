import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import './categories-grid.scss'
import lamp from '../../assets/images/lamp-grid.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions/quiz'
import { fetchСategories } from '../../store/actions/quiz'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'

const CategoriesGrid = () => {

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
          {
            s.children.map(c => (
              <li key={c.id}>
                <Link
                  className="grids__item"
                  to={`/categories/${c.id}`}
                  onClick={() => (dispatch(fetchСategories(c.id)))}
                >
                 <div className="grids__item-info">  
                    <span
                      className="grids__item-name"
                    >{c.name}</span>
                    <div className="grids__item-num">
                      <span>{c.services_count}</span> &nbsp;
                      <span>{serviceEnding(c.services_count)}</span>
                    <ArrowLink />
                    </div>
                  </div>
                  <div className="grids__item-img">
                  {
                    c.name === "IKEA" ? <img className="grids__item-ikea" src={c.svg_icon} alt="иконка" />
                                      : <img src={c.svg_icon} alt="иконка" />
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
    <>
      <Breadcrumbs deleteNextLinks={ true } />
      <section className="grids">
        <ul className="grids__list">
          <Loader />
          {renderCategories()}
        </ul>
      </section>
    </>
  )
}

export default CategoriesGrid;