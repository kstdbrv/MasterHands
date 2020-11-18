import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Documents.scss'

const Documents = () => {
  // при загрузке страницы прокручивает вверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
    return (
        <div >
            <div className="content">
                <h1>Документы</h1>
            </div>
            <div className="documents">
                <Link to="/documentsCondition">
                    <div className="documents__item">
                        <p>Условия использования продуктов компании</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className="documents__item">
                        <p>Политика защиты персональных данных</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className="documents__item">
                        <p>Заявление-согласие на обработку предоставленной информации</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className="documents__item">
                        <p>Политика защиты персональных данных</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Documents



