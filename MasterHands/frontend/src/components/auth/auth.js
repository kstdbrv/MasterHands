import React, { useEffect } from 'react'
import './auth.scss'

export default function Auth() {
  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'Auth'}>
      <div>
        <h2>Вход в личный кабинет</h2>
        <div className={'Auth-tel'}>
          <p>Телефон</p>
          <input />
        </div>
        {/* <div className={'Auth-password'}>
          <p>Пароль</p>
          <input />
        </div> */}
        <button className={'Auth__btn-active'}>Выслать код</button>
        <div className={'Auth-pasrec'}>
          <a href='#'>Восстановить пароль</a>
        </div>
      </div>
    </div>


  )
}

