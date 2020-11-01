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
            s.category.map(c => (
              <li key={c.id}>
                <Link
                  className="grids__item"
                  to={`/categories/${c.id}`}
                  onClick={() => (dispatch(fetchСategories(c.id)))}
                >
                 <div className="grids__item-info">  
                    <span
                      className="grids__item-name"
                    >{c.category_name}</span>
                    <p className="grids__item-num">
                     <span>{c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>  {/* количество услуг в суаеркатегории */}    {/* <span>{c.subcategory.length}</span> */}
                     <span> {serviceEnding(c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0))}</span>
                    <ArrowLink />
                    </p>
                  </div>
                  <p className="grids__item-img">
                    <img src={lamp} alt="иконка" />
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