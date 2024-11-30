import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ServicesPage.css';
import kabinet from '../../assets/kabinet.png';
import Map from '../../components/Map/Map';


const ServicesPage = () => {
    return (
        <div className="page-wrapper">
            <main>
                <section className="rules-section">
                    <div className="rules-content">
                        <p>Для комфортного проведения приема просим приходить <strong>чистыми в свежей одежде</strong>. Рекомендуем приходить за 5 минут до назначенного времени, так как при <strong>опоздании на 2 минуты</strong> доктор принимает следующего пациента, а вас примет после него (если вы склонны к конфликту в подобной ситуации, то лучше обратиться к другому специалисту). Просим предупредить нас в случае опоздания <strong>более чем на 5 минут</strong>, чтобы перезначить время встречи, так как минимум треть вашего времени уже потеряна.</p>
                        
                        <p>Мы стремимся быть пунктуальными, однако иногда возникают непредвиденные обстоятельства, из-за которых мы можем задержаться. Если это неприемлемо для вас, рекомендуем обратиться к другому специалисту.</p>
                        
                        <p>Пожалуйста, учитывайте, что в случае <strong>неявки</strong> на прием <strong>без уведомления</strong>, мы заносим вас в черный список. Повторное нарушение приведет к блокировке номера и отказу в приеме. Исходя из этого, не стоит записывать посторонних, родственников или друзей. Просим <strong>записываться самостоятельно</strong> и нести ответственность за свои действия.</p>
                        
                        <p>Если вы согласны с вышеперечисленными условиями, мы будем <strong>рады приветствовать вас</strong>!).</p>
                    </div>
                </section>

                <section className="preparation-section">
                    <h2>Подготовка к УЗИ</h2>
                    <div className="preparation-wrapper">
                        <div className="preparation-content">
                            <div className="preparation-item">
                                <h3>Органов брюшной полости</h3>
                                <p>За 2 дня до УЗИ исключить газообразующие продукты: сырые овощи, фрукты, молоко, черный хлеб, сладкие, мучные блюда, бобовые.</p>
                            </div>
                            <div className="preparation-item">
                                <h3>Органов малого таза (простата, мочевой пузырь, гинекология)</h3>
                                <p>За 2 дня до УЗИ исключить газообразующие продукты: сырые овощи, фрукты, молоко, черный хлеб, сладкие, мучные блюда, бобовые.</p>
                                <p>На УЗИ прийти с полным мочевым пузырем</p>
                            </div>
                        </div>
                        <div className="preparation-image">
                            <img src={kabinet} alt="Кабинет УЗИ" />
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="services-container">
                        <h2>Наши услуги</h2>
                        <div className="services-table">
                            <div className="services-column">
                                <div className="service-item">
                                    <div className="service-name">УЗИ печени, желчного пузыря</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ поджелудочной железы</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ селезенки</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ органов брюшной полости (печень, желчный пузырь, поджелудочная железа, селезенка)</div>
                                    <div className="service-price">2.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ почек</div>
                                    <div className="service-price">1.500 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ органов брюшной полости и почек</div>
                                    <div className="service-price">3.500 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ мочевого пузыря с определением остаточной мочи</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ плевральных полостей(на предмет жидкости)</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ регионарных лимфоузлов(одна анатомическая область</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                            </div>
                            <div className="services-column">
                                <div className="service-item">
                                    <div className="service-name">УЗИ органов малого таза: трансабдоминально</div>
                                    <div className="service-price">1.500 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ органов малого таза: трансвагинально и трансабдоминально</div>
                                    <div className="service-price">2.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">Фолликулометрия(второе и последующее исследование)</div>
                                    <div className="service-price">1.000 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ молочных желез и регионарных лимфоузлов(подмышечных, подключичных, надключичных)</div>
                                    <div className="service-price">1.800 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ щитовидных желез и регионарных лимфоузлов</div>
                                    <div className="service-price">1.500 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">УЗИ мягких тканей(одна анатомическая область)</div>
                                    <div className="service-price">1.000 руб</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">Комплексное УЗИ женщин (органы брюшной полости,забрюшинного пространства, малого таза, молочных желе</div>
                                    <div className="service-price">8.800 руб.</div>
                                </div>
                                <div className="service-item">
                                    <div className="service-name">Мануальная терапия(Остеопатия и PDTR)</div>
                                    <div className="service-price">5.000 руб.</div>
                                </div>
                            </div>
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

export default ServicesPage; 