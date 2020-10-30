import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Search.scss'
import { fetchSearchCategories } from '../../store/actions/quiz'
import { serviceEnding } from '../../utils/utils'


export const Search = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSearchCategories())
  }, [])

  const services = useSelector(state => state.searchServices)
  let arr = []
  let arr1 = []
  let arr2 = []
  let randomService
  if (services.length) {
    services.map(e => {
      arr.push(e.service_name)
      arr1.push(e)
    })

    function randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
    console.log(arr1)

    for (let i = 0; i < 2; i++) {
      arr2.push(arr1[randomInt(services.length)])
    }

    console.log('За сервисом', arr2)
  }

  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="Введите запрос" />
        <button className="search__btn" />
      </form>
      <div className="search__bg"></div>
      <p className="search__text">
        Например, &nbsp;
        {/* http://127.0.0.1:8000/services/135 */}
        {
          arr2.length
            ? <>
              <Link to={'/'}>
                {arr2[0].service_name}
              </Link>
            </>
            : null
        }
        {/* <Link to="/"> {
          arr2.length
            ? arr2[0].service_name
            : null},
        </Link> &nbsp;
        <Link to="/"> {
          arr2.length
            ? arr2[1].service_name
            : null
        }
        </Link>&nbsp; */}
      и еще &nbsp;
      {arr.length} {serviceEnding(arr.length)}
      </p>
    </section>
  )
}