import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CategoriesService from '../../ApiService'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './Services.scss'


const categoryService = new CategoriesService()

const Services = () => {

  const [state, setState] = useState({
    supercategories: []
  })

  useEffect(() => {
    categoryService.getSuperCategories().then(result => {
      setState({
        supercategories: result
      })
    })
},[])

  return (
  <>
   <Search />
   <div className="service">
    <div className="service__inner">
      <div className="service__list list-service">
        <ul className="list-service__list">
        {
         state.supercategories.map(s => {           
         return (
          <React.Fragment key={s.id}>
          <li className="list-service__title">
            <p>{s.supercategory_name}</p>
          </li>
            <>
              {
                s.category.map(c => {
                  return (
                  <li key={c.id} className="list-service__item">
                  <p>{c.category_name}</p>
                  <NavLink to="/categories/{c.id}">
                    <span>{ c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>
                    <span> услуг{/* { if((q%2=0)){} } */}</span>
                  </NavLink>
                </li>
                  )
                } 
               )
              }
            </>     
         </React.Fragment>
          )
         })
        }    
       </ul>
      </div>
        
      <ServicesRight />
    </div>
  </div>
  </>    
  )
}

export default Services


