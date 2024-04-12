import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Импорт useHistory из react-router-dom
import './css/RegistrationPage.css'; // Подключаем CSS файл 

function RegistrationPage() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [last_name, setLastName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [second_name, setMiddleName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    login: '',
    email: '',
    password: '',
    last_name: '',
    first_name: '',
    second_name: '',
    phone: ''
  });

  const history = useHistory(); // Инициализация useHistory

  const handleRegistration = async (event) => {
    event.preventDefault();
    let isError = false;
    const newErrors = {};
  
    // Проверка Логина
    if (!/^[\w\d]+$/.test(login)) {
      newErrors.login = 'Логин может содержать только буквы и цифры';
      isError = true;
    }
  
    // Проверка Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email должен быть в формате example@mail.com';
      isError = true;
    }
  
    // Проверка Пароля
    if (!/^\d{6}$/.test(password)) {
      newErrors.password = 'Пароль должен состоять из 6 цифр';
      isError = true;
    }

    // Проверка Фамилии
    if (!/^[\u0410-\u042f\u0430-\u044f]+$/.test(last_name)) {
      newErrors.last_name = 'Фамилия должна быть написана на русском одним словом';
      isError = true;
    }
  
    // Проверка Имени
    if (!/^[\u0410-\u042f\u0430-\u044f]+$/.test(first_name)) {
      newErrors.first_name = 'Имя должно быть написано на русском одним словом';
      isError = true;
    }
  
    // Проверка Телефона
    if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = 'Телефон должен содержать 11 цифр';
      isError = true;
    }
    
  
    setErrors(newErrors);
  
    if (!isError) {
      // Логика регистрации:
      const userData = {
        login: login,
        email: email,
        password: password,
        last_name: last_name,
        first_name: first_name,
        second_name: second_name,
        phone: phone,
      };
    
      try {
        const response = await fetch('URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        if (!response.ok) {
          throw new Error('Ошибка при отправке данных');
        }
    
        window.location.href = './login';
    
      } catch (error) {
        console.error('Ошибка:', error.message);
      }
    }
    
  };
  
  const getInputClass = (inputValue, error) => {
    if (inputValue && !error) {
      return 'input valid';
    } else if (error) {
      return 'input error';
    } else {
      return 'input';
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleRegistration}>
        <h2 className="title">РЕГИСТРАЦИЯ</h2>
        <div className="input-container">
          <label>Логин:</label>
          <input
            className={getInputClass(login, errors.login)}
            type="text"
            value={login}
            onChange={(e) => { setErrors({ ...errors, login: '' }); setLogin(e.target.value); }}
            placeholder="Введите логин"
          />
          {errors.login && <p className="error">{errors.login}</p>}
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            className={getInputClass(email)}
            type="email"
            value={email}
            onChange={(e) => { setErrors({ ...errors, email: '' }); setEmail(e.target.value); }}
            placeholder="example@mail.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-container">
          <label>Пароль:</label>
          <input
            className={getInputClass(password)}
            type="password"
            value={password}
            onChange={(e) => { setErrors({ ...errors, password: '' }); setPassword(e.target.value); }}
            placeholder="Введите пароль"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="input-container">
          <label>Фамилия:</label>
          <input
            className={getInputClass(last_name)}
            type="text"
            value={last_name}
            onChange={(e) => { setErrors({ ...errors, last_name: '' }); setLastName(e.target.value); }}
            placeholder="Введите фамилию"
          />
          {errors.last_name && <p className="error">{errors.last_name}</p>}
        </div>
        <div className="input-container">
          <label>Имя:</label>
          <input
            className={getInputClass(first_name)}
            type="text"
            value={first_name}
            onChange={(e) => { setErrors({ ...errors, first_name: '' }); setFirstName(e.target.value); }}
            placeholder="Введите имя"
          />
          {errors.first_name && <p className="error">{errors.first_name}</p>}
        </div>
        <div className="input-container">
          <label>Отчество (при наличии):</label>
          <input
            className="input"
            type="text"
            value={second_name}
            onChange={(e) => setMiddleName(e.target.value)}
            placeholder="Введите отчество"
          />
        </div>
        <div className="input-container">
          <label>Телефон:</label>
          <input
  className={getInputClass(phone, errors.phone)}
  type="tel"
  value={phone}
  onChange={(e) => { setErrors({ ...errors, phone: '' }); setPhone(e.target.value); }}
  placeholder="Введите номер телефона"
/>

          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <input className="button" type="submit" value="РЕГИСТРАЦИЯ" />
      </form>
    </div>
  );
}

export default RegistrationPage;
