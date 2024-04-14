import React, { useState } from 'react';
import './css/LoginPage.css'; 

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
  
    // Проверяем, что введенные данные не пустые
    if (!login || !password) {
      setError('Пожалуйста, введите логин и пароль');
      return;
    }
  
    try {
      // Отправляем запрос на сервер для аутентификации
      const response = await fetch('http://localhost:8080/api/Account/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, password })
      });
  
      // Проверяем статус ответа
      if (response.ok) {
        const data = await response.json();
        // Сохраняем токен в localStorage
        localStorage.setItem('token', data.token);
        window.location.href = '/clients'; // Перенаправляем пользователя на страницу клиентов
      } else {
        const data = await response.json();
        setError(data.message || 'Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
      setError('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
    }
  };
  
  

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <h2 className="title">АВТОРИЗАЦИЯ</h2>
        <label>
          Логин:
          <input
            className="input"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          Пароль:
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <input className="button" type="submit" value="ВХОД" />
      </form>
      <button className="button" onClick={() => window.location.href = '/registration'}>РЕГИСТРАЦИЯ</button>

    </div>
  );
}

export default LoginPage;
