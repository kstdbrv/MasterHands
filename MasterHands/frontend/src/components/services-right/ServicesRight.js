import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesRight.scss'

export const ServicesRight = () => (

  <div className="content__right">
  <div className="become-master">
      <span>Хочешь стать мастером на все руки? Заполни анкету и начни собирать заказы!</span>
       <button className="button">
         Стать мастером
       </button>
      <p className="become-master__task"> 
           Что-то сломалось? <br/>
           Не знаешь, как починить? <br/>                      
       </p>
       <span className="no-panic">Без паники!</span> 
       <div className="become-master__title">
           Мастер все починит!
       </div>
       <p className="text">
           Работаем по договору и даём гарантию на 12 месяцев. Если что-то сломается, то исправим за свой счёт.
       </p>
       <div className="become-master__more">
           <Link to="/">Узнать больше о “Мастер на все руки” ❯</Link> 
       </div>
  </div>
  
</div>
)
