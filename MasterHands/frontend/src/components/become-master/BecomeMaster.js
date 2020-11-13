import React from 'react'
import './become-master.scss'
import { Link } from 'react-router-dom'
import Master from '../../assets/images/master.png'
import { useEffect } from 'react' 
import StartAnswer from '../startAnswer/StartAnswer'

export default function BecomeMaster() {

    useEffect(() => {
        var show  = document.getElementById("show-more");
        var arrow = document.getElementById("show-more");
      
        show.addEventListener('click', function(e){
            var visible = document.querySelectorAll(".speciality__works .visible");
            arrow.classList.toggle('show-more__active');
            visible.forEach(function(v) {
                v.style.display = v.style.display === 'block' ? 'none' : 'block';
            });
           
        })
    }, [])

    return (
        <div className="container-fixed">
            <h1>Стать мастером</h1>
            <div className="works">
                <div className="works__left">
                    <div className="left__content">
                        <span>Работа для мастеров 
                            в Краснодаре</span>
                        <p>Расскажем об условиях, вышлем прайсы и пригласим на собеседование</p> 
                        <Link to="/questionnaire"><button className="button button-blue" >Стать мастером</button></Link>   
                    </div>
                </div>
                <div className="works__right">
                     <img src={Master} alt="Мастер"/>
                </div>
            </div>
            <div className="specialty">
                <span>Работа по специальности</span>
                <div className="speciality__works">                               
                    <Link to="/vacansies">Сантехника</Link>
                    <Link to="">Ремонтно‑отделочные работы</Link>
                    <Link to="">Ремонт швейного оборудования</Link>
                    <Link to="">Электрика</Link>
                    <Link to="">Установка межкомнатных дверей</Link>
                    <Link to="">Ремонт электрических плит</Link>
                    <Link to="">Сборка мебели</Link>
                    <Link to="">Установка входных дверей</Link>
                    <Link to="">Укладка и ремонт полов</Link>
                    <Link to="">Сборка кухонь</Link>
                    <Link to="">Малярно‑штукатурные работы</Link>
                    <span id="show-more" className="show-more">Смотреть весь список</span>        
                    <Link to="" className="visible">Монтаж натяжных потолков</Link>
                    <Link to="" className="visible">Отделка</Link>
                    <Link to="" className="visible">Поклейка обоев</Link>
                    <Link to="" className="visible">Монтаж окон</Link>
                    <Link to="" className="visible">Укладка плитки</Link>
                    <Link to="" className="visible">Ремонт кофемашин</Link>
                    <Link to="" className="visible">Монтаж потолков</Link>
                    <Link to="" className="visible">Проектные работы</Link>
                    <Link to="" className="visible">Ремонт мягкой мебели</Link>
                    <Link to="" className="visible">Укладка и ремонт паркета</Link>
                    <Link to="" className="visible">Дизайн интерьера</Link>
                    <Link to="" className="visible">Ремонт пылесосов</Link>
                    <Link to="" className="visible">Реставрация ванн</Link>
                    <Link to="" className="visible">Монтаж кондиционеров</Link>
                    <Link to="" className="visible">Ремонт стиральных и посудомоечных машин</Link>
                    <Link to="" className="visible">Слаботочные работы</Link>
                    <Link to="" className="visible">Ремонт телевизоров</Link>
                    <Link to="" className="visible">Ремонт холодильников</Link>
                    <Link to="" className="visible">Сметные работы</Link>
                    <Link to="" className="visible">Ремонт телефонов</Link>
                    <Link to="" className="visible">Ремонт цифровой техники</Link>
                    <Link to="" className="visible">Вывоз строительного мусора</Link>               
                </div>            
                        
            </div>
            <StartAnswer />  
        </div>
    )
}
