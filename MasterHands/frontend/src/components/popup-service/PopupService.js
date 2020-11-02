import React from 'react'
import { useDispatch } from 'react-redux'
import './popup-service.scss'
import { hidePopup } from '../../store/actions/app'



const PopupService = () => {

  const dispatch = useDispatch();

  return (
    <div className="popup-service">
    <div className="popup-service__info">
      <h5 className="popup-service__title">
        Вы заранее знаете стоимость работ.
      </h5>
      <p className="popup-service__text">
        Мы подробно уточним ваш заказ и в большинстве
        случаев цена не изменится.
      </p>
      <h5 className="popup-service__title">
        Иногда мы сможем назвать ориентировочную стоимость. 
        И вот почему:
      </h5>
      <p className="popup-service__text">
        Некоторые работы сложно оценить на словах. Например, 
        мы не знаем состояние ваших труб, которые надо заменить, 
        или вы не знаете материал стен, с которыми надо работать.
      </p>
      <h5 className="popup-service__title">
        Точную цену скажет мастер, по прайсу.
      </h5>
      <p className="popup-service__text">
        На месте мастер увидит весь фронт работ и, возможно, обнаружит
        дополнительные. Например, при подключении телевизора надо 
        будет заменить и розетку. Не волнуйтесь — все работы мастер 
        оценит по фиксированному прайсу. Никаких накруток.
      </p>
    </div> 
    <div className="popup-service__fone"></div>
</div>
    //<button onClick={ ()=> (dispatch(hidePopup())) }>click me</button>
  )
}

export default PopupService