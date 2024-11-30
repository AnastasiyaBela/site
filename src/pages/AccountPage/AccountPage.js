import React, { useState } from 'react';
import './AccountPage.css';

const AccountPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        contact: '',
        password: '',
        confirmPassword: '',
    });
    const [loginData, setLoginData] = useState({
        contact: '',
        password: ''
    });
    const [hasMiddleName, setHasMiddleName] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [loginErrors, setLoginErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!userData.lastName) {
            newErrors.lastName = 'Это поле является обязательным для заполнения';
        }
        if (!userData.firstName) {
            newErrors.firstName = 'Это поле является обязательным для заполнения';
        }
        if (!userData.contact) {
            newErrors.contact = 'Это поле является обязательным для заполнения';
        }
        if (!userData.password) {
            newErrors.password = 'Это поле является обязательным для заполнения';
        }
        if (!userData.confirmPassword) {
            newErrors.confirmPassword = 'Это поле является обязательным для заполнения';
        }
        if (userData.password !== userData.confirmPassword) {
            newErrors.passwordMatch = 'Пароли не совпадают. Проверьте еще раз';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateLoginForm = () => {
        const newErrors = {};
        
        if (!loginData.contact) {
            newErrors.contact = 'Это поле является обязательным для заполнения';
        }
        if (!loginData.password) {
            newErrors.password = 'Это поле является обязательным для заполнения';
        }

        setLoginErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoggedIn(true);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateLoginForm()) {
            setIsLoggedIn(true);
        }
    };

    if (isLoggedIn) {
        return (
            <div className="page-wrapper">
                <main className="account-main">
                    <div className="user-profile">
                        <h2>{`${userData.lastName} ${userData.firstName} ${userData.middleName}`}</h2>
                        {/* Здесь будет содержимое личного кабинета */}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <main className="account-main">
                <div className="auth-container">
                    {!isLogin ? (
                        <form className="auth-form" onSubmit={handleRegister}>
                            <h2>Регистрация</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Фамилия *"
                                    required
                                    value={userData.lastName}
                                    onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Имя *"
                                    required
                                    value={userData.firstName}
                                    onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Отчество (при наличии)"
                                    required={false}
                                    value={userData.otName}
                                    onChange={(e) => setUserData({...userData, otName: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={hasMiddleName}
                                        onChange={(e) => setHasMiddleName(e.target.checked)}
                                    />
                                    Нет отчества
                                </label>
                            </div>
                            {hasMiddleName && (
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Отчество *"
                                        required
                                        value={userData.middleName}
                                        onChange={(e) => setUserData({...userData, middleName: e.target.value})}
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Телефон или почта *"
                                    required
                                    value={userData.contact}
                                    onChange={(e) => setUserData({...userData, contact: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Пароль * (минимум 8 символов)"
                                        required
                                        minLength="8"
                                        pattern="^[A-Za-z0-9]{8,}$"
                                        value={userData.password}
                                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                                        className={errors.password ? 'error' : ''}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                                {errors.password && <span className="error-message">{errors.password}</span>}
                                <span className="password-hint">Минимум 8 символов (буквы или цифры)</span>
                            </div>
                            <div className="form-group">
                                <div className="password-input-container">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Подтвердите пароль *"
                                        required
                                        minLength="8"
                                        pattern="^[A-Za-z0-9]{8,}$"
                                        value={userData.confirmPassword}
                                        onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
                                        className={errors.confirmPassword ? 'error' : ''}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                                {errors.passwordMatch && <span className="error-message">{errors.passwordMatch}</span>}
                            </div>
                            <button type="submit" className="auth-button">Зарегистрироваться</button>
                            <button type="button" className="switch-button" onClick={() => setIsLogin(true)}>
                                Уже есть аккаунт? Войти
                            </button>
                        </form>
                    ) : (
                        <form className="auth-form" onSubmit={handleLogin}>
                            <h2>Вход</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Телефон или почта *"
                                    required
                                    value={loginData.contact}
                                    onChange={(e) => setLoginData({...loginData, contact: e.target.value})}
                                    className={loginErrors.contact ? 'error' : ''}
                                />
                                {loginErrors.contact && <span className="error-message">{loginErrors.contact}</span>}
                            </div>
                            <div className="form-group">
                                <div className="password-input-container">
                                    <input
                                        type={showLoginPassword ? "text" : "password"}
                                        placeholder="Пароль *"
                                        required
                                        minLength="8"
                                        pattern="^[A-Za-z0-9]{8,}$"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                        className={loginErrors.password ? 'error' : ''}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                    >
                                        {showLoginPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                                {loginErrors.password && <span className="error-message">{loginErrors.password}</span>}
                                <span className="password-hint">Минимум 8 символов (буквы или цифры)</span>
                            </div>
                            <button type="submit" className="auth-button">Войти</button>
                            <button type="button" className="switch-button" onClick={() => setIsLogin(false)}>
                                Нет аккаунта? Зарегистрироваться
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AccountPage; 