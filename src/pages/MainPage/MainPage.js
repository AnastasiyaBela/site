import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './MainPage.css';
import logo from '../../assets/logo.png';
import Map from '../../components/Map/Map';

const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    const faqItems = [
        { 
            question: "Делаете ли вы УЗИ детям?",
            answer: "Мы проводим УЗИ только для лиц старше 18 лет"
        },
        { 
            question: "Делаете ли вы УЗИ по беременности?",
            answer: "Нет, наш доктор УЗИ не специализируется в этой области"
        },
        { 
            question: "Делаете ли вы УЗИ желудка и кишечника?",
            answer: "Скрининг желудка и кишечника проводится нашим доктором при обычном ультразвуковом исследовании органов брюшной полости. Как отдельное исследование УЗИ желудка и кишечника нами не выделено в силу низкой информативности ультразвукового исследования в диагностике заболеваний желудка и кишечника. Ультразвук желудка и кишечника не поставит вам точный диагноз. Для этого необходима эндоскопия (гастроскопия, колоноскопия)"
        },
        { 
            question: "Делаете ли вы УЗИ сердца и сосудов?",
            answer: "Нет, наш доктор УЗИ не специализируется в этой области"
        },
        { 
            question: "Делаете ли вы УЗИ суставов?",
            answer: "Нет, наш доктор УЗИ не специализируется в этой области"
        },
        { 
            question: "Делаете ли вы УЗИ простаты?",
            answer: "Для обследования простаты необходимо ТРУЗИ (Трансректальное УЗИ). Именно это УЗИ может увидеть рак. Трансабдоминальное УЗИ, которое проводит наш доктор, не исключает рак. Мы можем лишь описать форму, размеры простаты и оценить функцию мочевого пузыря (остаточной мочи). Поэтому более целесообразно вам сразу записаться на ТРУЗИ к урологу."
        },
        { 
            question: "Делате ли вы допплер?",
            answer: "Нет, наш доктор УЗИ не специализируется в этой области"
        },
        { 
            question: "Делаете ли вы эластометрию?",
            answer: "Нет, наш доктор УЗИ не специализируется в этой области"
        },
        { 
            question: "Вы гинеколог?",
            answer: "Нет, наш доктор является узистом. Ультразвуковое исследование по гинекологии не исключает консультацию гинеколога."
        },
        { 
            question: "Вы маммолог?",
            answer: "Нет, наш доктор осуществяет УЗИ молочной железы. Данное УЗИ не исключает констультацию маммолога."
        },
        { 
            question: "Точно ли мне поможет сеанс остеопатии?",
            answer: "Мы не можем гарантировать конкретный результат от проведения остеопатического лечения, так как каждый организм индивидуален и реагирует по-разному на терапию, однако доктор Гвашева приложит все свои знания, опыт и желание. Если вам нужны гарантии результата, то лучше обратитесь к другому специалисту, который может их дать."
        },
        { 
            question: "Бывают ли скидки или акции?",
            answer: "Нет, наши цены постоянны, мы не проводим скидки или акции."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleServiceClick = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="page-wrapper">
         

            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Чем мы занимаемся?</h1>
                        <div className="doctor-info">
                            <p>Доктор УЗИ Гвашева Юлия Рамазановна с более чем 20-летним опытом работы предоставляет профессиональные услуги по ультразвуковому исследованию.</p>
                            <p>Кроме УЗИ, доктор Гвашева также работает в области остеопатии и PDTR.</p>
                        </div>
                    </div>
                    <div className="logo">
                            <img src={logo} alt="ЗИ оборудование" />
                        </div>
                    
                </section>

                <section className="services-section">
                    <div 
                        className="service-card"
                        onClick={() => handleServiceClick('/services')}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>УЗИ</h3>
                        <p>Является неинвазивным, информативным, доступным и высокоточным исследованием. Метод позволяет исследовать органы и ткани человека, дать информацию о наличии или отсутствии в них воспалений, новообразований, повреждений и прочих изменений.</p>
                    </div>
                    <div 
                        className="service-card"
                        onClick={() => handleServiceClick('/osteopathy')}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>Остеопатия</h3>
                        <p>Включает в себя комплекс диагностических процедур, лечение и длительную реабилитацию при дисфункции висцеральных органов и патологических изменениях опорно-двигательного аппарата пациента.</p>
                    </div>
                    <div 
                        className="service-card"
                        onClick={() => handleServiceClick('/pdtr')}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>P-DTR</h3>
                        <p>Представляет собой неврологическую рефлексогенную систему лечения, которая эффективно разрешает широкий спектр функциональных проблем.</p>
                    </div>
                </section>

                <section className="dropdown-section">
                    <div className="dropdown-container">
                        <div className="dropdown-item">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setIsEducationOpen(!isEducationOpen)}
                            >
                                <h3>Образование</h3>
                                <span className={`arrow ${isEducationOpen ? 'open' : ''}`}>▼</span>
                            </div>
                            <div className={`dropdown-content ${isEducationOpen ? 'open' : ''}`}>
                                <ul>
                                    <li>2002г-Квалификация врач по специальности "лечебное дело"(КГМа)</li>
                                    <li>2003г-Окончание интернатуры по специальности акушерство и гинекология (КГМА)</li>
                                    <li>2004г-Присвоена специальность "ультразвуковая диагностика"(КГМА)</li>
                                    <li>2009г-Повышение квалификации по программе "Общие вопросы УЗД" и "Малоинвазивные технологии под ультразвуковым контролем"(КГМУ)</li>
                                    <li>2014г-Повышение квалификации по специальности ультразвуковая диагностика(КГМУ)</li>
                                    <li>2019г-Повышение квалификации по специальности ультразвуковая диагностика</li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown-item">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                            >
                                <h3>Стаж работы</h3>
                                <span className={`arrow ${isExperienceOpen ? 'open' : ''}`}>▼</span>
                            </div>
                            <div className={`dropdown-content ${isExperienceOpen ? 'open' : ''}`}>
                                <ul>
                                    <li>01.08.02-11.08.03 ГБУЗ РА Адыгейский Республиканский Клинический Перинатальный Центр</li>
                                    <li>14.08.03-06.02.19 ГБУЗ "Онкологический диспансер №2" МЗ КК</li>
                                    <li>15.05.06-26.05.08 МУЗ г. СОЧИ "Перинатальный Центр"</li>
                                    <li>15.06.06-17.06.11 ГБУЗ "Городская Поликлиника №1 Города Сочи" МЗ КК</li>
                                    <li>22.03.10-13.05.11 АО "Курортная Поликлиника №1"</li>
                                    <li>01.01.22-03.10.23 ООО "МЕДЦЕНТРДК"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="faq-section">
                    <h2>Частые вопросы</h2>
                    <div className="faq-container">
                        {faqItems.map((item, index) => (
                            <div className="dropdown-item faq-item" key={index}>
                                <div 
                                    className="dropdown-header" 
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3>{item.question}</h3>
                                    <span className={`arrow ${openFaq === index ? 'open' : ''}`}>+</span>
                                </div>
                                <div className={`dropdown-content ${openFaq === index ? 'open' : ''}`}>
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                    <div className="developer-info">
                        <p>*Сайт разработан Белой Анастасией</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MainPage; 