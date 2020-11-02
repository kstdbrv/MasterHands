import React from 'react'
import './vacansies.scss'
import StartAnswer from '../startAnswer/StartAnswer'
import vMaster from '../../assets/images/vacansies_master.png'

import { Link } from 'react-router-dom'

export default function Vacansies() {
    return (
        <div className="container-fixed">         
            <h1>Сантехника</h1>           
                <div className="vacansies">
                <div className="container">
                    <div className="vacansies__left">
                        <div className="vacansies__left-content">
                            <span>Работа для сантехника в Краснодаре</span>
                            <p className="vacansies__left-price">30 500 ₽ средний месячный доход</p>
                            <p>Расскажем об условиях, вышлем прайсы и пригласим на собеседование.</p> 
                            <Link to="/questionnaire"><button className="button button-blue" >Стать мастером</button></Link>   
                        </div>
                    </div>
                    <div className="vacansies__right"> 
                        <img src={vMaster} alt="Мастер" />                      
                    </div>
                    
                </div>
                
            </div>   
            <StartAnswer />          
        </div>
    )
}
