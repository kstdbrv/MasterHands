import React, { useEffect, useState } from 'react'
import CategoriesService from '../../ApiService'
import { Loader } from '../../components/loader/Loader'
import './subcategories.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const categoryService = new CategoriesService()

const Subcategories = () => {

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
        <Breadcrumbs
          /* categoryName={state.categories.category_name}  электрика */
        />
       <ul className="subcategories__list">
        {
          state.categories.subcategory.map(s => {
            return (
              <Link to={`/subcategories/${s.id}`} key={s.id}>
                <li className="subcategories__item">
                  {s.subcategory_name}
                </li>
              </Link>  
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

//const mapDispatchToProps = {
  /* createPost: createPost */
 // createPost,   //сокращенный вариант
 // showAlert
//}

export default connect(mapStateToProps, /* mapDispatchToProps */)(Subcategories);