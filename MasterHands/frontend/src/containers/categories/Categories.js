import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import './Categories.scss'

const categoryService = new CategoriesService()

export const Categories = ({ id = 2 }) => {

  const [state, setState] = useState({
    categories: [],
    isLoaded: false
  })

  useEffect(() => {
    categoryService.getCategory(id).then(result => {
      setState({
        categories: result,
        isLoaded: true
      })
    })
},[])
  
  return (
 
    <React.Fragment>
      
      {state.isLoaded ? <>
      <div>{state.categories.category_name}</div>
      <ul>
        {
          state.categories.subcategory.map(s => {
            return (
              <li>{s.subcategory_name}</li>
            )
          })
        }
      </ul></>
      : "Loading..."}
      
    </React.Fragment>
  )
}