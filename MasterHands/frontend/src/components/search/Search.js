import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllServices, getService, getServices } from '../../store/actions/quiz'
import { serviceEnding, randomInt, toLowerCase } from '../../utils/utils'
import Lineloader from '../loader/Lineloader/Lineloader'
import './Search.scss'

const Search = (props) => {
  const [searchInput, setsearchInput] = useState();
  const [state, setState] = useState([])
  const [randomServices, setRandomServices] = useState([])
  const [allServices, setAllServices] = useState([])

  const dispatch = useDispatch()

  const services = useSelector(state => state.allServices)

  useEffect(() => {
    if (!services.length) {
      dispatch(getAllServices())
    }
  }, [])

  useEffect(() => {
    Compare(services)
  }, [services])

  useEffect(() => {
    let arr1 = []
    let arr2 = []

    const isStateEmpty = state => {
      if (state.length) {
        return state.map(el => {
          if (el.services) {
            arr1.push(el.services)
          }
        })
      }
    }

    isStateEmpty(state)

    const randomService = (arr1) => {
      if (arr1.length) {
        const arrServices = arr1.flat()
        setAllServices(arrServices)

        for (let i = 0; i < 2; i++) {
          let num = randomInt(arrServices.length)
          arr2.push(arrServices[num])
        }
      }
    }

    randomService(arr1)

    setRandomServices(arr2)


  }, [state])

  const handleSearch = searchInput => {
    if (searchInput) {
      const result = allServices.filter(service => service.service_name.toLowerCase().includes(searchInput.toLowerCase()))
      return result.length !== 0
        ? result.map((el, index) => {
          if (index > 5) {
            return
          } else return (
            <React.Fragment key={index}>
              <Link className="search__element"
                to={`/services/${el.id}`}
                onClick={() => {
                  dispatch(getServices(el.category))
                  dispatch(getService(el.id))
                }}
              >
                <p> {el.service_name} </p>
                <p>{el.price}</p>
              </Link>
            </React.Fragment>)
        })
        : <p className='search__elementnone'>Нет искомой услуги, но мы работаем над этим =)</p>
    }
  }

  const Compare = (localState) => {
    if (state != localState) {
      setState(localState)
    } else return
  }

  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Введите запрос"
          onChange={(e) => {
            setsearchInput(e.target.value)
          }} />
        <span className="search__btn" />
        <div className="search__dropdown">
          {searchInput
            ? <React.Fragment><div className="search__elements">
              {handleSearch(searchInput)}
            </div></React.Fragment>
            : <React.Fragment><div className="search__elements hide"></div></React.Fragment>}
        </div>
      </form>
      <div className="search__bg"></div>
      <div className="search__text">

        {
          randomServices.length
            ? <React.Fragment>
              Например, &nbsp;
              <Link to={`/services/${randomServices[0].id}`}
                onClick={() => {
                  // dispatch(getСategories(id))
                  dispatch(getServices(randomServices[0].category))
                  dispatch(getService(randomServices[0].id))
                }}
              >
                {toLowerCase(randomServices[0].service_name)}
              </Link>, &nbsp;
               <Link to={`/services/${randomServices[1].id}`}
                onClick={() => {
                  dispatch(getServices(randomServices[1].category))
                  dispatch(getService(randomServices[1].id))
                }}
              >
                {toLowerCase(randomServices[1].service_name)}
              </Link> &nbsp;
              и еще &nbsp;
              {props.serviceQty.current} {serviceEnding(props.serviceQty.current)}
            </React.Fragment>
            : <Lineloader />
        }
      </div>
    </section >
  )
}
export default Search 