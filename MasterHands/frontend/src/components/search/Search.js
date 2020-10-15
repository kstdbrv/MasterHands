import React from 'react'
import { NavLink } from 'react-router-dom'
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
      <NavLink to="/"> починить окно, </NavLink>&nbsp;
      <NavLink to="/">ремонт стиральной машины </NavLink>&nbsp;
      и еще
      <NavLink to="/"> 604 услуги</NavLink>
    </p>
   </section>
  )
}