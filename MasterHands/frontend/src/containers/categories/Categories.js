import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import { Loader } from '../../components/loader/Loader'
import './Categories.scss'
import { connect } from 'react-redux'

const categoryService = new CategoriesService()

const Categories = (props) => {

  const [state, setState] = useState({
    categories: [],
    isLoaded: false
  })

  useEffect(() => {
    categoryService.getCategoriesByURL(window.location.pathname).then(result => {   // props.id
      setState({
        categories: result,
        isLoaded: true
      })
    })
},[])
  
  if (!state.isLoaded) {
    return <Loader />
  } else {
    return (
      <>
       <div>{state.categories.category_name}</div>
       <ul>
        {
          state.categories.subcategory.map(s => {
            return (
              <li key={s.id}>{s.subcategory_name}</li>
            )
          })
        }
        </ul>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.id
  }
}

export default connect(mapStateToProps)(Categories);