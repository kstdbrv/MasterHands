import React from 'react'
import './Search.scss'

export const Search = () => {
  return (
    <section className="search">
    <form className="search__form">
      <input className="search__input" type="text" placeholder="Введите запрос"/>
      <input className="search__btn" type="submit"/>
    </form>
    <div className="search__bg"></div>
    <p className="search__text">
      Например, &nbsp;
      <a href="#"> починить окно, </a>&nbsp;
      <a href="#">ремонт стиральной машины </a>&nbsp;
      и еще<br/>
      <a href="#"> 604 услуги</a>
    </p>
   </section>
  )
}