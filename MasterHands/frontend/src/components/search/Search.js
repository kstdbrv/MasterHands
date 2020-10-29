import React from 'react'
import { Link } from 'react-router-dom'
import './Search.scss'
import {SearchModule} from './search_module/SearchModule'

export const Search = () => {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="Введите запрос" />
        <Link to='/search'>
          <button className="search__btn" onClick={SearchModule} />
        </Link>
      </form>
      <div className="search__bg"></div>
      <p className="search__text">
        Например, &nbsp;
      <Link to="/"> починить окно, </Link>&nbsp;
      <Link to="/">ремонт стиральной машины </Link>&nbsp;
      и еще &nbsp;
      <Link to="/"> 604 услуги</Link>
      </p>
    </section>
  )
}