import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import OsteopathyPage from './pages/OsteopathyPage/OsteopathyPage';
import PDTRPage from './pages/PDTRPage/PDTRPage';
import AccountPage from './pages/AccountPage/AccountPage';
import Header from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/osteopathy" element={<OsteopathyPage />} />
                    <Route path="/pdtr" element={<PDTRPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
