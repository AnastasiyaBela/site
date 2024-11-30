import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './OsteopathyPage.css';
import certificate1 from '../../assets/certificate1.png';
import certificate2 from '../../assets/certificate2.png';
import certificate3 from '../../assets/certificate3.png';
import certificate4 from '../../assets/certificate4.png';
import osteopathyImage from '../../assets/osteopathy.png';
import Map from '../../components/Map/Map';

const OsteopathyPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const certificates = [certificate1, certificate2, certificate3, certificate4];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === certificates.length - 1 ? 0 : prevSlide + 1
            );
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? certificates.length - 1 : prevSlide - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === certificates.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="page-wrapper">
            <main>
                <section className="osteopathy-section">
                    <div className="osteopathy-content">
                        <div className="osteopathy-image">
                            <img src={osteopathyImage} alt="Остеопатия" />
                        </div>
                        <div className="osteopathy-text">
                            <h1>Остеопатия</h1>
                            <p>Остеопатия включает в себя комплекс диагностических процедур, лечение и длительную реабилитацию при дисфункции висцеральных органов и патологических изменениях опорно-двигательного аппарата пациента.</p>
                        </div>
                    </div>
                </section>

                <section className="certificates-section">
                    <h2>Образование и дипломы</h2>
                    <div className="certificates-slider">
                        <button className="slider-button prev" onClick={handlePrevSlide}>&#10094;</button>
                        <div className="certificate-image">
                            <img 
                                src={certificates[currentSlide]} 
                                alt={`Сертификат специалиста ${currentSlide + 1}`} 
                            />
                        </div>
                        <button className="slider-button next" onClick={handleNextSlide}>&#10095;</button>
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

export default OsteopathyPage; 