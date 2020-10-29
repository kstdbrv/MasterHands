import React from 'react'
import './contacts.scss'

export default function Contacts() {
    return (
        <div className="contacts-head">
            <h1>Контакты</h1>
            <div className="contacts">
                <div className="contacts__content">
                    <div className="content__text">
                        <span>Компания:</span>
                        <p>“Мастер на все руки”</p>
                    </div>
                    <div className="content__text">
                        <span>Адрес:</span>
                        <p>г. Краснодар, ул. Краснодарская, 138, корпус 11</p>
                    </div>
                    <div className="content__text">
                        <span>Телефон:</span>
                        <a href="tel:8(918)7777777"><p>8(918)777-77-77</p></a>
                    </div>
                    <div className="content__text">
                        <span>E-mail:</span>
                        <p>master_sdelaet@pochta.ru</p>
                    </div>          
                </div>
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.8154861462467!2d38.972465315414716!3d45.028670979098216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fbc902ab9f5%3A0x2b3bdf3f369f2299!2z0JrRgNCw0YHQvdC-0LDRgNC80LXQudGB0LrQsNGPINGD0LsuLCA2NCDQutC-0YDQv9GD0YEgMiwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDAw!5e0!3m2!1sru!2sru!4v1601638935982!5m2!1sru!2sru" 
                    title='map' width='100%' height='585px' frameBorder={0} style={{borderRadius:"20px"}} allowFullScreen={true} aria-hidden={false} tabIndex={0}/>
                
            </div>
        </div>
    )
}
