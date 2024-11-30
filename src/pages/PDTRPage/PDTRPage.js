import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './PDTRPage.css';
import Map from '../../components/Map/Map';
const brainImage = require('../../assets/brain.png');


const PDTRPage = () => {
    return (
        <div className="page-wrapper">
       

            <main>
                <section className="pdtr-section">
                    <div className="pdtr-content">
                        <div className="pdtr-image">
                            <img 
                            src={brainImage} 
                            alt="P-DTR метод" 
                            />
                        </div>
                        <div className="pdtr-text">
                            <h1>PDTR</h1>
                            <p>P-DTR представляет собой неврологическую рефлексогенную систему лечения, которая эффективно разрешает широкий спектр функциональных проблем</p>
                            <p>Обучение по P-DTR проходило в <strong>Институте Функциональной Неврологии</strong></p>
                            <p>Ознакомиться с методом P-DTR вы можете с помощью <a href="#" className="video-link">видео</a>.</p>
                        </div>
                    </div>
                </section>

                <Map />
                <section id="contacts" className="contacts-section">
                    <h2>Контакты</h2>
                    <div className="contact-info">
                        <p>Телефон: +7 918 917 00 01</p>
                        <p>Адрес: г. Сочи, ул. Пластунская 100Б</p>
                        <p>Inst: dr.gvasheva</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PDTRPage; 