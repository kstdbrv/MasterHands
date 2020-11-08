import React from 'react'
import './service-body.scss'
import { useDispatch } from 'react-redux'
import { showPopup } from '../../store/actions/app'


const ServiceBody = ({ price, serviceName }) => {

  const dispatch = useDispatch();

  return (
    <div className="service-main">
      <div className="service">
        <h1>{serviceName}</h1>
        <p className="service__text">
          Соберём люстру, повесим на потолок, подключим к
          электричеству, спрячем провода. Работу выполним
          за 1–2 часа. Будем отключать свет.
    </p>
        <div className="service__terms">
          <div className="service__terms-column">
            <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4286 28.5714H34.2857V34.2857H11.4286V28.5714ZM17.1429 51.4286H5.71429V5.71429H25.7143V20H40V28.8571L45.7143 23.1429V17.1429L28.5714 0H5.71429C4.19876 0 2.74531 0.602039 1.67368 1.67368C0.602039 2.74531 0 4.19876 0 5.71429V51.4286C0 52.9441 0.602039 54.3975 1.67368 55.4692C2.74531 56.5408 4.19876 57.1429 5.71429 57.1429H17.1429V51.4286ZM11.4286 45.7143H23.1429L25.7143 43.1429V40H11.4286V45.7143ZM46.2857 31.4286C46.5714 31.4286 47.1429 31.7143 47.4286 32L51.1429 35.7143C51.7143 36.2857 51.7143 37.4286 51.1429 38L48.2857 40.8571L42.2857 34.8571L45.1429 32C45.4286 31.7143 45.7143 31.4286 46.2857 31.4286V31.4286ZM46.2857 42.5714L28.8571 60H22.8571V54L40.2857 36.5714L46.2857 42.5714V42.5714Z" fill="#0F0F0F" />
            </svg>
            <p>Фиксируем цену договором</p>
          </div>
          <div className="service__terms-column">
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.0909 27.2727C49.0909 42.4091 38.6182 56.5636 24.5455 60C10.4727 56.5636 0 42.4091 0 27.2727V10.9091L24.5455 0L49.0909 10.9091V27.2727ZM24.5455 54.5455C34.7727 51.8182 43.6364 39.6545 43.6364 27.8727V14.4545L24.5455 5.94545L5.45455 14.4545V27.8727C5.45455 39.6545 14.3182 51.8182 24.5455 54.5455ZM19.0909 43.6364L8.18182 32.7273L12.0273 28.8818L19.0909 35.9182L37.0636 17.9455L40.9091 21.8182" fill="#0F0F0F" />
            </svg>
            <p>Гарантия 12 месяцев</p>
          </div>
        </div>
        <div className="service__price">
          <p>
            {price}
          </p>&nbsp;
      <span>₽</span>
    </div>
    <p
      className="service__question"
      onClick={() => (dispatch(showPopup()))}   
    >
     Как формируется цена?
    </p>
        <button className="button button-blue">
          Рассчитать точную стоимость
    </button>
        <button className="button">
          Быстрый заказ
    </button>
      </div>
    </div>
  )
}

export default ServiceBody