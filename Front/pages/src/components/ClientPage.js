import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/ClientPage.css'; // Подключаем CSS файл
import './css/Dva.css';

function ClientPage() {
  const { clientId } = useParams();
  const [calculations, setCalculations] = useState([]);
  const client = { name: 'Тестовый Тест Тестов', address: 'ул.Тестовая ул., дом 43-45', phone: 'тел. 8-900-000-00-00' };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCreateCalculation = () => {
    setIsModalOpen(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsModalOpen(false);
    // Определяем, куда переходить в зависимости от выбранной опции
    switch (option) {
      case 'фундамент':
        window.location.href = '/frame-page'; // Переходим на страницу для фундамента
        break;
      case 'каркас':
        window.location.href = '/calculation-page';
        break;
      case 'крыша':
        window.location.href = '/page5';
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    window.location.href = '/page1';
  };

  const handleClose = () => {
    window.location.href = '/page1';
  };

  const handleAddCalculation = () => {
    const newCalculation = {
      number: calculations.length + 1,
      date: new Date().toLocaleDateString(),
      status: 'Актуален',
      address: 'Адрес строительства'
    };
    setCalculations([...calculations, newCalculation]);
  };

  return (
    <div className="container">
      <div className="name">
        <h1>{client.name}</h1>
        <p>{client.address}</p>
        <p>{client.phone}</p>
      </div>
      <button className="close-button" onClick={() => window.location.href = '/'}>X</button>
      <div className="form">
        <h2 className="title">Клиенты</h2>
        <button className="button action-button" onClick={handleCreateCalculation}>Создать расчет</button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="button-container">
                <button className="button calculation-option" onClick={() => handleOptionSelect('фундамент')}>Фундамент</button>
                <button className="button calculation-option" onClick={() => handleOptionSelect('каркас')}>Каркас</button>
                <button className="button calculation-option" onClick={() => handleOptionSelect('крыша')}>Крыша</button>
                <button className="button close-button2" onClick={handleCloseModal}>Закрыть</button>
              </div>
            </div>
          </div>
        )}
        {calculations.map((calculation, index) => (
          <div className="calculation" key={index}>
            <div>Расчет №{calculation.number}</div>
            <div>{calculation.date}</div>c
            <div>{calculation.status}</div>
            <div>{calculation.address}</div>
            <div>
              <button>🗑️</button>
              <button>📋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPage;
