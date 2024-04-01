import React, { useState } from 'react';
import './css/LoginPage.css'; // Подключаем CSS файл 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Здесь должна быть проверка пароля
    if (password === 'yourPassword') {
      window.location.href = '/clients';
    } else {
      setError('Пароль неверный');
    }
  };

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // Отправляем запрос на сервер для проверки пароля
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });
  //     if (response.ok) {
  //       window.location.href = '/clients';
  //     } else {
  //       const data = await response.json();
  //       setError(data.message || 'Пароль неверный');
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при входе:', error);
  //     setError('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
  //   }
  // };

  return (
    <div className="container"> {/* Заменили <Container> на <div className="container"> */}
      <form className="form" onSubmit={handleLogin}> {/* Заменили <Form> на <form className="form"> */}
        <h2 className="title">АВТОРИЗАЦИЯ</h2> {/* Заменили <Title> на <h2 className="title"> */}
        <label>
          E-mail:
          <input
            className="input" // Добавили класс input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="input" // Добавили класс input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        <input className="button" type="submit" value="ВХОД" /> {/* Заменили <Button> на <input className="button"> */}
      </form>
    </div>
  );
}

export default LoginPage;
