import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (e, path) => {
        e.preventDefault();
        if (path === '/') {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (path.startsWith('#')) {
            if (location.pathname === '/') {
                const element = document.getElementById(path.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/', { state: { scrollTo: path.substring(1) } });
            }
        }
        setIsMenuOpen(false); // Закрываем меню после клика
    };

    const handlePageNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false); // Закрываем меню после клика
    };

    return (
        <header className="main-header">
            <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="/" onClick={(e) => handleNavigation(e, '/')}>
                            О нас
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handlePageNavigation('/services')}>
                            Услуги
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handlePageNavigation('/osteopathy')}>
                            Остеопатия
                        </a>
                    </li>
                    <li>
                        <a onClick={() => handlePageNavigation('/pdtr')}>
                            PDTR
                        </a>
                    </li>
                    <li>
                        <NavLink to="/account" onClick={() => setIsMenuOpen(false)}>
                            Личный кабинет
                        </NavLink>
                    </li>
                    <li>
                        <a href="#faq" onClick={(e) => handleNavigation(e, '#faq')}>
                            Частые вопросы
                        </a>
                    </li>
                    <li>
                        <a href="#contacts" onClick={(e) => handleNavigation(e, '#contacts')}>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 