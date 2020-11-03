import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Search.scss'
import { getAllServices } from '../../store/actions/quiz'
import { serviceEnding, randomInt, toLowerCase } from '../../utils/utils'


export const Search = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllServices())
  }, [])

  const services = useSelector(state => state.allServices)
  let arr1 = []
  let arr2 = []

  if (services.length) {
    services.map(e => {
      if (e.services) {
        arr1.push(e.services)
      }
    })
  }

  if (arr1.length) {
    const arrServices = arr1.flat()

    for (let i = 0; i < 2; i++) {
      arr2.push(arrServices[randomInt(services.length - 1)])
    }
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
        {
          arr2.length && arr2[0].service_name !== arr2[1].service_name
            ? <>
              <Link to={`/`}
              // onClick={() => dispatch(fetchSearchService(arr2[0].id))}
              >
                {toLowerCase(arr2[0].service_name)}
              </Link>, &nbsp;
              <Link to={`/`}
              // onClick={() => dispatch(fetchSearchService(arr2[1].id))}
              >
                {toLowerCase(arr2[1].service_name)}
              </Link> &nbsp;
            </>
            : null
        }
      и еще &nbsp;
      {props.serviceQty.current} {serviceEnding(props.serviceQty.current)}
      </p>
    </section >
  )
}