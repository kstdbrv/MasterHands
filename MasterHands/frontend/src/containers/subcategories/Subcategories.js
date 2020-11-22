import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getServices, onEmptyStore } from '../../store/actions/quiz'
import { GET_СATEGORIES } from '../../store/actions/actionTypes'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ArrowLink from '../../components/UI/Arrow-link/ArrowLink'
import { getNumber } from '../../utils/utils'
import './subcategories.scss'


const Subcategories = () => {

  const dispatch = useDispatch()
  const supercategories = useSelector(state => state.supercategories)
  const categories = useSelector(state => state.categories)

  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!supercategories.length) {
      let id = getNumber(window.location.pathname)
      dispatch(onEmptyStore(id, GET_СATEGORIES))
    }
  }, [])

  return (
    <React.Fragment>
      <Breadcrumbs deleteServiseLink={true} />
      <ul className="subcategories__list">
        { categories.children.map(s => {
              return (
                <li key={s.id}>
                  <Link
                    to={`/subcategories/${s.id}`}
                    className="subcategories__item"
                    onClick={() => (dispatch(getServices(s.id)))}
                  >
                    {s.name}
                    <ArrowLink />
                  </Link>
                </li>
              )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default React.memo(Subcategories)