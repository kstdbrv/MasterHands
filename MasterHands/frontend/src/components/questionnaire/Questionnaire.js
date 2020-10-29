import React from 'react'
import './questionnaire.scss'

export default function Questionnaire() {
    return (
        <div className="questionnaire">
            <div className="questionnaire__block">
                <h1 className="questionnaire__title">Анкета</h1>
                <form className="questionnaire__form">
                    <span className="questionnaire__fio">Ф.И.О</span>
                    <input type="text" className="questionnaire__input-fio" placeholder="Как в паспорте" />
                    <span className="questionnaire__speciality">Выберите специальность</span>
                    <input type="button" className="questionnaire__input-speciality" value="Добавить специальность"/>
                    <span className="questionnaire__region">Регион</span>
                    <input type="text" className="questionnaire__input-region" defaultValue="Краснодар, Краснодарский край" />
                    <span className="questionnaire__tel">Телефон</span>
                    <input type="text" className="questionnaire__input-tel" placeholder="+7 (800) 000-00-00" />
                    <span className="questionnaire__mail">Электрованная почта</span>
                    <input type="email" className="questionnaire__input-mail" id="mail" placeholder="name@example.com" />
                    <button className="button">Отправить</button>
                    <div className="questionnaire__accept">
                        <label className="questionnaire__accept-label" htmlFor="accept" id="accept-label"><p>Принимаю условия <span>публичной оферты</span></p></label>
                        <input className="questionnaire__accept-input" type="checkbox" name="accept" id="accept" />                       
                    </div>
                   
                </form>
            </div>
        </div>

    )
}
