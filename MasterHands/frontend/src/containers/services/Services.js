import React, { useState } from 'react'
import { useEffect } from 'react'
import CategoriesService from '../../ApiService'
import './Services.scss'


const categoryService = new CategoriesService()

const Services = () => {

  const [state, setState] = useState({
    categories: []
  })


  categoryService.getCategories().then(function (result) {setState({ categories: result })})

  return (
   <div className="service">
    <div className="service__inner">
      <div className="service__list list-service">
       <ul className="list-service">
        <li className="list-service__title">
          <h5>Основные работы</h5>
        </li>
        {
          state.categories.map(s => 
            <li className="list-service__item">
              <p>{s.category_name}</p>
              <p>{s.subcategory.lenght}</p>
            </li>  
          )    
        }
        <li className="list-service__title">
          <h5>Ремонт и отделочные работы</h5>
        </li>

        <li className="list-service__title">
          <h5>Установить и починить</h5>
        </li>

        <li className="list-service__title">
          <h5>По комнатам</h5>
        </li>
            
            
       </ul>
      </div>
      <div className="service__form form-service">

      </div>
    </div>
  </div>
  )
}

export default Services


/* {state.categories.map(e =>
  <div>
    <p>{e.id}</p>
    <p>{e.category_name}</p>
  </div>

)} */