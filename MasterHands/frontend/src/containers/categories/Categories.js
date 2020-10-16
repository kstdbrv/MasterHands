import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import './Categories.scss'

const categoryService = new CategoriesService()

export const Categories = ({ id }) => {

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
  console.log(state.categories)
  
  return (
 
    <React.Fragment>
      <div>{state.categories.category_name}</div>
      <ul>
{/*         {
          state.categories.subcategory.map(s => {
            return (
              <li>{s.subcategory}</li>
            )
          })
        } */}
        <li>{}</li> 
      </ul>
    </React.Fragment>
  )
}