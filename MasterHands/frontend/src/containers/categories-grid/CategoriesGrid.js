import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import './categories-grid.scss'
import lamp from '../../assets/images/lamp-grid.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions'
import { fetchСategories } from '../../store/actions'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const CategoriesGrid = () => {

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.services.supercategories);
  const categories = useSelector(state => state.services.categories);

  useEffect(() => {
    if (!supercategories.length) {
      dispatch(fetchSupercategories())
    }
  }, [])

  const getCategories = id => {
    if (!categories.subcategory.length) {
      dispatch(fetchСategories(id))
    }
  }

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
                  to={`/categories/${c.id}`}
                  onClick={() => { getCategories(c.id) }}
                  className="grids__item"
                >
                 <p>  
                    <span
                      className="grids__item-name"
                    >{c.category_name}</span>
                    <p className="grids__item-num">
                    <span>{c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>  {/* количество услуг в суаеркатегории */}    {/* <span>{c.subcategory.length}</span> */}
                    <span> {serviceEnding(c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0))} ❯</span>
                    </p>
                 </p>
                  <img src={lamp} alt="иконка" />
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
      <Loader />
      <Breadcrumbs />
      <section className="grids">
        <ul className="grids__list">
          {renderCategories()}
        </ul>
      </section>
    </>
  )
}

export default CategoriesGrid;