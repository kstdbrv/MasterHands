import React, {  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './categories.scss'
import lamp from '../../assets/images/lamp.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSupercategories } from '../../store/actions'
import { fetchСategories } from '../../store/actions'


const Categories = () => {

  const dispatch = useDispatch();
  const supercategories = useSelector(state => state.services.supercategories);
  const categories = useSelector(state => state.services.categories);

  useEffect(() => {
    if (supercategories.length === 0) {
      dispatch(fetchSupercategories())
    }
  }, [])
  
  const getCategories = id => {
    if (categories.subcategory.length === 0) {
      dispatch(fetchСategories(id))
    }
  }

  const renderCategories = () => { 
    console.log(supercategories)
      return (
        supercategories.map(s => (          
          <React.Fragment key={s.id}>
           <li className="list-service__title">
             <p>{s.supercategory_name}</p>
           </li>
           {
             s.category.map(c => (
               <li key={c.id} className="list-service__item">
                <p>
                 <img src={lamp} alt="иконка"/>
                 <span>{c.category_name}</span>
                </p>
                <Link
                  to={`/categories/${c.id}`}
                   onClick={ () => { getCategories(c.id) } }
                > 
                 <span>{ c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>  {/* количество услуг в суаеркатегории */}    {/* <span>{c.subcategory.length}</span> */}                                         
                 <span> услуг{/* { if((q%2=0)){} } */} ❯</span>
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
       <Search />
       <div className="service">
        <div className="service__inner">
          <div className="service__list list-service">
            <ul className="list-service__list">
             { renderCategories() }    
            </ul>
          </div>
          <ServicesRight />
        </div>
       </div>
      </>    
  )
}

export default Categories;
