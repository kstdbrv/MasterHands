import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Group2 from '../../assets/images/Group2.png'
import Group1 from '../../assets/images/Group1.jpg'
import Group3 from '../../assets/images/Group3.png'



export default class SimpleSlider extends Component {



  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="main">
        <Slider {...settings}>
          <div className="main__slider">
            <div className="slider__item-1 ">
              <div className="item__left-1">
                <p className="left__p">Компенсируем ущерб, в случае непредвиденной поломки.</p>
              </div>
              <div className="item__right-1">
                <img className="right__img" src={Group1} alt="Слайдер" />
              </div>
            </div>           
          </div>
          <div className="main__slider">
            <div className="slider__item-1 ">
              <div className="item__left-2">
                <p className="left__p">Работаем прозрачно. Подпишите договор с мастером перед началом работ. Мы предоставляем гарантию на 12 месяцев.</p>
              </div>
              <div className="item__right-1">
                <img className="right__img" src={Group2} alt="Слайдер" />
              </div>
            </div>           
          </div>
          <div className="main__slider">
            <div className="slider__item-1 ">
              <div className="item__left-3">
                <p className="left__p">Стоимость работы указана в договоре и не изменится на месте. Материалы докупим за отдельную плату.</p>
              </div>
              <div className="item__right-1">
                <img className="right__img" src={Group3} alt="Слайдер" />
              </div>
            </div>           
          </div>

        </Slider>
      </div>
    );
  }
}