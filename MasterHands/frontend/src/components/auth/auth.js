import React from 'react'
import './auth.scss'

export default function Auth() {
  return (
    <div className='auth'>
      <div>
        <h2>Вход в личный кабинет</h2>
        <div className='auth__tel'>
          <p>Телефон</p>
          <input placeholder='+7 (800) 000-00-00' />
        </div>
        <button className='auth__btn-active'>Выслать код</button>
        <input className='auth__inputAuthCode ' placeholder='BDTC34' />
        <div className='auth__pasrec'>
          <p>На номер <span>+7 (800) 000-00-00</span> отправлено СМС с кодом. <a href='#'>Отправить повторное СМС</a> или <a href='#'>указать другой номер</a></p>
        </div>
      </div>
    </div>


  )
}

