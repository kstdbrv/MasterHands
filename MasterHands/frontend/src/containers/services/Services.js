import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoriesService from '../../ApiService'
import { Loader } from '../../components/loader/Loader'
import { Search } from '../../components/search/Search'
import { ServicesRight } from '../../components/services-right/ServicesRight'
import './Services.scss';
import { connect } from 'react-redux';


const categoryService = new CategoriesService()

const Services = (props) => {

  const [state, setState] = useState({
    supercategories: [],
    isLoaded: false
  })

  useEffect(() => {    // эмулирует componentDidMount - getSuperCategories() вызывается после рендеринга компонента один раз
    categoryService.getSuperCategories().then(result => {
      setState({
        supercategories: result,
        isLoaded: true
      })
    })
 },[])

  const renderServices = () => {  // получаем список суперкатегории + категории + кол-во услуг
    if (!state.isLoaded) {
      return <Loader/>
    } else {
      return (
        state.supercategories.map(s => (          
          <React.Fragment key={s.id}>
           <li className="list-service__title">
             <p>{s.supercategory_name}</p>
           </li>
           {
             s.category.map(c => (
              <li key={c.id} className="list-service__item">
                <p>{c.category_name}</p>
                <Link to={{
                   pathname: `/categories/${c.id}`,
                   id: `${c.id}`
                 }}> 
                 <span>{ c.subcategory.reduce((lenght, sub) => lenght + sub.services.reduce((lenght) => lenght + 1, 0), 0)}</span>
                 <span> услуг{/* { if((q%2=0)){} } */} ❯
                 }} onClick={() => props.dispatch({type:'CHANGE_ID', id:c.id})}> 
                   <span>{
                     c.subcategory.reduce((len, sub) => len + sub.services.length, 0)
                   }</span>
                 <span> услуг{/* { if((q%2=0)){} } */}</span>
                </Link>
              </li>
             ))
           }
          </React.Fragment>
        ))
      )
    }
  }

  return (
  <>
   <Search />
   <div className="service">
    <div className="service__inner">
      <div className="service__list list-service">
        <ul className="list-service__list">
         { renderServices() }    
        </ul>
      </div>
      <ServicesRight />
    </div>
   </div>
  </>    
  )
}



// export default Services
export default connect()(Services);
