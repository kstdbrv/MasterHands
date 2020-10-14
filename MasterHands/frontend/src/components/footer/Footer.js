import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer>
    <div class="container">
    <div class="footer__content">
      <div class="footer__left">
        <div class="footer__left-logo">
           <a href=""><span class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" viewBox="0 0 55 54" fill="none">
             <path d="M27.46 4.07557C31.994 4.07557 36.4262 5.42007 40.1961 7.93904C43.966 10.458 46.9043 14.0383 48.6394 18.2272C50.3745 22.4161 50.8285 27.0254 49.9439 31.4723C49.0594 35.9192 46.876 40.004 43.67 43.21C40.464 46.416 36.3792 48.5994 31.9323 49.4839C27.4854 50.3685 22.8761 49.9145 18.6872 48.1794C14.4983 46.4443 10.918 43.506 8.39903 39.7361C5.88006 35.9662 4.53558 31.534 4.53558 27C4.53629 20.9203 6.95177 15.0898 11.2508 10.7908C15.5498 6.49177 21.3803 4.07629 27.46 4.07557ZM27.46 0C22.1199 0 16.8997 1.58352 12.4596 4.55032C8.01948 7.51712 4.55882 11.7339 2.51526 16.6675C0.471691 21.6012 -0.0630001 27.0299 0.978801 32.2674C2.0206 37.5049 4.59209 42.3159 8.36811 46.0919C12.1441 49.8679 16.9551 52.4394 22.1925 53.4812C27.43 54.523 32.8588 53.9883 37.7924 51.9447C42.7261 49.9012 46.9429 46.4405 49.9097 42.0004C52.8765 37.5603 54.46 32.3401 54.46 27C54.4514 19.8418 51.604 12.9792 46.5424 7.91761C41.4808 2.85599 34.6182 0.00859415 27.46 0Z" fill="white"></path>
             <path d="M39.0941 16.4809L33.9983 25.4629L30.104 32.5288C29.8847 32.9896 29.5245 33.3687 29.0756 33.6113C28.676 33.8462 28.228 33.9869 27.7658 34.0227C27.7009 34.0227 27.6332 34.0227 27.5628 34.0227C27.0153 34.0258 26.477 33.8819 26.0041 33.6059C25.5466 33.3568 25.1707 32.9809 24.9216 32.5234L27.5493 27.1651L31.6303 19.317C32.3583 17.9179 33.0971 16.9843 33.8467 16.5323C34.7078 16.0497 35.6856 15.8147 36.672 15.8531C37.5238 15.8175 38.3668 16.036 39.0941 16.4809Z" fill="white"></path>
             <path d="M40.5392 19.4036V34.6369C40.5721 35.5653 40.242 36.47 39.619 37.1592C39.3163 37.4837 38.9477 37.7397 38.5379 37.9101C38.1281 38.0805 37.6866 38.1612 37.243 38.1469C36.8013 38.1544 36.3633 38.0664 35.9588 37.889C35.5543 37.7115 35.1929 37.4487 34.8994 37.1186C34.2638 36.417 33.9243 35.4966 33.9522 34.5504L33.9982 25.4629L39.094 16.4809C39.2409 16.5731 39.3787 16.6791 39.5054 16.7975C40.1928 17.4227 40.5392 18.2941 40.5392 19.4036Z" fill="white"></path>
             <path d="M21.0084 34.5504C21.0356 35.4995 20.6897 36.4215 20.0449 37.1186C19.7447 37.4482 19.3778 37.7103 18.9687 37.8876C18.5595 38.0649 18.1174 38.1532 17.6716 38.1469C17.2307 38.1562 16.7929 38.0709 16.3877 37.8967C15.9825 37.7226 15.6193 37.4637 15.3226 37.1375C14.6938 36.4592 14.3557 35.5615 14.3808 34.6369V20.0666C14.3808 18.8037 14.748 17.7862 15.4822 17.014C15.7506 16.7241 16.0674 16.4832 16.4186 16.3023L20.9623 25.5034L21.0084 34.5504Z" fill="white"></path>
             <path d="M27.5493 27.1651L24.9161 32.5207L20.9623 25.5007L16.4186 16.2996C17.0232 15.9892 17.6957 15.8347 18.3752 15.8504C19.6011 15.8504 20.5862 16.0912 21.3141 16.5756C22.0421 17.06 22.7972 18.0586 23.609 19.5876L24.4209 21.1221L26.7022 25.5089L27.5493 27.1651Z" fill="white"></path>
             </svg></span></a>
             <a href="" class="logo-name">Мастер на все руки <br/>
               <small>сервис домашнего ремонта в Краснодаре</small>
             </a>
        </div>
        <div class="footer__left-download">
          <div class="footer__left-download-title">
           Скачайте наше приложение
          </div>
            <object id="one" data="../../assets/images/footer/Group39.svg" type="image/svg+xml"></object>
            <object id="two" data="../../assets/images/footer/Group38.svg" type="image/svg+xml"></object>
            <object id="three" data="../../assets/images/footer/respons39.svg" type="image/svg+xml"></object>
            <object id="four" data="../../assets/images/footer/respons38.svg" type="image/svg+xml"></object>
        </div>
      </div>
      <div class="footer__right">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
      
          <ul class="menu__box">
              <li><a class="menu__item" href="">Каталог</a>{/* </li> */}
                      <input id="li_toggle2" type="checkbox" />
                      <label for="li_toggle2">
                          <span class="span_item">О сервисе</span></label>
                          <ul class="item_ul">
                              <li class="item_li"><a href="">О нас</a></li>
                              <li class="item_li"><a href="">Документация</a></li>
                              <li class="item_li"><a href="">Контакты</a></li>
                          </ul>
                  </li>
                  <li>
                      <input id="li_toggle3" type="checkbox" />
                      <label for="li_toggle3">
                          <span class="span_item">Мастеру</span></label>
                          <ul class="item_ul">
                              <li class="item_li"><a href="">Личный кабинет</a></li>
                              <li class="item_li"><a href="">Стать мастером</a></li>
                          </ul>
                  </li>
          </ul>
        </div>
       <nav class="footer__right-nav">
         <ul class="footer__right-menu">
           <li class="footer__right-menu-item"><a href="">Каталог</a></li>
           <li class="footer__right-menu-item"><a href="#" class="down">О сервисе</a>
             <ul>
               <li><a href="">О нас</a></li>
               <li><a href="">Документация</a></li>
               <li><a href="">Контакты</a></li>
             </ul>
           </li>
           <li class="footer__right-menu-item"><a href="#" class="down">Мастеру</a>
             <ul>
               <li><a href="">Личный кабинет</a></li>
               <li><a href="">Стать мастером</a></li>
             </ul>
           </li>
         </ul>
       </nav>
       <div class="contacts1">
         <div class="contacts__phone">
             <a href="#" type="phone"  >8(918)777-77-77</a>
             <small>Остались вопросы? Позвоните нам!</small>
         </div>
         <div class="contacts__react">
           <div class="contact__logo">
            <object data="../../assets/images/footer/Group16.svg" type="image/svg+xml"></object>
           </div>             
             <small>Спроектировано и оформленно в <br/> digital-студии ReactLab</small>
         </div>
       </div>
      </div>
    </div>
     <hr/>
     <div class="contacts2">
         <div class="contacts__phone">
             <a href="#" type="phone"  >8(918)777-77-77</a>
             <small>Остались вопросы? Позвоните нам!</small>
         </div>
         <div class="contacts__react">
           <div class="contact__logo">
            <object data="../../assets/images/footer/Group16.svg" type="image/svg+xml"></object>
           </div>             
             <small>Спроектировано и оформленно в <br/> digital-студии ReactLab</small>
         </div>
       </div>
     <div class="footer__links">
       <ul class="footer__links-content">
         <li>
            <a href=""><img src="../../assets/images/footer/пинтерест.svg" alt=""/></a>
         </li>
         <li>
          <a href=""><img src="../../assets/images/footer/фэйсбук.svg" alt=""/></a>
         </li>
         <li>
          <a href=""><img src="../../assets/images/footer/инстаграмм.svg" alt=""/></a>
         </li>
         <li>
          <a href=""><img src="../../assets/images/footer/твитер.svg" alt=""/></a>
        </li>
        <li>
          <a href=""><img src="../../assets/images/footer/вк.svg" alt=""/></a>
        </li>
        <li>
          <a href=""><img src="../../assets/images/footer/телеграмм.svg" alt=""/></a>
        </li>
        <li>
          <a href=""><img src="../../assets/images/footer/ОК.svg" alt=""/></a>
       </li>
 
       </ul>
     </div>
    </div> 
  </footer>
  )
}