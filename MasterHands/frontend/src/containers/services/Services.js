import React, { useState } from 'react'
import { useEffect } from 'react'
import CategoriesService from '../../ApiService'
import './Services.scss'


const categoryService = new CategoriesService()

const Services = () => {

  const [state, setState] = useState({
    supercategories: []
  })

  categoryService.getSuperCategories().then(function (result) {setState({ supercategories: result })})

  return (
   <div className="service">
    <div className="service__inner">
      <div className="service__list list-service">
        <ul className="list-service__list">
        {
              state.supercategories.map(s => {
        let q
        return (
          <>
          <li className="list-service__title">
            <p>{s.supercategory_name}</p>
          </li>
          {
            <>
              {
                s.category.map(c =>
                  <li className="list-service__item">
                    <p>{c.category_name}</p>
                    <p>
                     <span>{ q = c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>
                      <span> услуг{/* { if((q%2=0)){} } */}</span>
                    </p>
                  </li>)
              }
            </>
          }      
        </>
        )
      })
        }    
       </ul>
      </div>
        
      <div className="service__form form-service">

      </div>
    </div>
  </div>
  )
}

export default Services


