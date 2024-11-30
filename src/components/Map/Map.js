import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <section className="map-section">
            <div className="map-container">
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c99c1c7b0e6f3e5e3c9c1c7b0e6f3e5&amp;source=constructor&amp;scroll=true&amp;mode=search&amp;text=Сочи%2C+Пластунская+100Б&amp;z=17&amp;ll=39.751466%2C43.585760"
                    width="100%" 
                    height="400" 
                    frameBorder="0"
                    title="Карта"
                    allow="geolocation"
                ></iframe>
            </div>
        </section>
    );
};

export default Map; 