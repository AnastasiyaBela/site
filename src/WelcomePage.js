import React, { useEffect, useState } from 'react';
import './welcome.css';
import myPhoto from './assets/method.jpg';
import codePhoto from './assets/4ltg.gif';

const WelcomePage = ({ onContinue }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [text, setText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Найдем и заменим массив текстов для анимации
    const texts = ['Method Laboratory', 'Telegram Development', 'Web3 Solutions'];

    // Обновляем все возможные места, где может храниться текст
    const typewriterConfig = {
        strings: ['Method Laboratory'], // Массив с одним текстом
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    };

    // Если используется компонент Typewriter
    const typewriterOptions = {
        strings: ['Method Laboratory'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 100
    };

    // Если используется эффект useTypewriter
    const useTypewriterConfig = {
        text: 'Method Laboratory',
        eraseText: 'Method Laboratory',
        interval: 100,
        eraseInterval: 50
    };

    // Если есть отдельный массив для анимации
    const animationTexts = ['Method Laboratory'];

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let typingInterval;

        const typeText = () => {
            const currentFullText = texts[currentTextIndex];

            if (!isDeleting && currentIndex <= currentFullText.length) {
                setText(currentFullText.slice(0, currentIndex));
                currentIndex++;
            } else if (isDeleting && currentIndex >= 0) {
                setText(currentFullText.slice(0, currentIndex));
                currentIndex--;
            }

            if (currentIndex > currentFullText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000);
            } else if (currentIndex === 0 && isDeleting) {
                isDeleting = false;
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                typeText();
            } else {
                typingInterval = setTimeout(typeText, isDeleting ? 50 : 100);
            }
        };

        typeText();

        return () => clearTimeout(typingInterval);
    }, [currentTextIndex]);

    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.body.style.cursor = '';
        };
    }, []);

    const handleContinue = () => {
        document.querySelector('.welcome-container').classList.add('fade-out');
        setTimeout(() => {
            onContinue();
        }, 1000);
    };

    return (
        <>
            <div 
                className={`cursor ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`
                }}
            />
            <div className="welcome-container">
                <div className="top-section">
                    <img 
                        src={myPhoto}
                        alt="My Photo" 
                        className="welcome-image"
                    />
                    <div className="text-block right">
                        <h1 className="animated-text typing">
                            {text}<span className="typing-cursor">|</span>
                        </h1>
                        <p className="animated-text">
                            Method — инновационная IT-компания, специализирующаяся на разработке 
                            экосистемы продуктов внутри Telegram. Создаем высоконагруженные 
                            приложения, игровые платформы и бизнес-решения, которыми ежедневно 
                            пользуются миллионы людей по всему миру.
                        </p>
                        <button onClick={handleContinue} className="continue-button">
                            Читать дальше
                        </button>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="text-block full-width">
                        <h2 className="animated-text">Экспертиза в Telegram Bot API</h2>
                        <p className="animated-text">
                            Разрабатываю сложные Telegram-боты и веб-приложения, используя современный стек технологий:
                        </p>
                        <div className="skills-container">
                            <div className="skills-column">
                                <strong>Технический стек:</strong>
                                <span>• node-telegram-bot-api</span>
                                <span>• Telegram Web Apps API</span>
                                <span>• Express.js для бэкенда</span>
                                <span>• WebSocket для real-time коммуникаций</span>
                                <span>• Redis для кэширования</span>
                                <span>• MongoDB для хранения данных</span>
                                <span>• Docker для контейнеризации</span>
                            </div>
                            <div className="skills-column">
                                <strong>Специализация:</strong>
                                <span>• Игровые боты и мини-игры в Telegram</span>
                                <span>• Сервисы автоматизации бизнес-процессов</span>
                                <span>• CRM-системы с интеграцией Telegram</span>
                                <span>• Платёжные системы и криптовалютные интеграции</span>
                                <span>• Чат-боты с искусственным интеллектом</span>
                            </div>
                            <div className="skills-column">
                                <strong>Монетизация Telegram:</strong>
                                <span>• Telegram Premium API интеграция</span>
                                <span>• Система Telegram Stars и донаты</span>
                                <span>• Внутренняя валюта TON/Toncoin</span>
                                <span>• Подключение Adsgram для рекламы</span>
                                <span>• Crypto-платежи (BTC, ETH, USDT)</span>
                                <span>• Telegram Payments API</span>
                                <span>• Fragment username аукционы</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomePage; 