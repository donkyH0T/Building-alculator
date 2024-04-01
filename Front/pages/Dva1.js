import React, { useState } from 'react';
import './Dva.css'; // Подключаем CSS файл
import logo from './logo11.png'

const Dva = ({ setPage }) => {
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
        setPage(3); // Переходим на страницу для фундамента
        break;
      case 'каркас':
        setPage(4);
      break;
      case 'крыша':
        setPage(5);
      break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    setPage(1);
  };

  const handleAllClients = () => {
    // Функция для перехода на страницу "Все клиенты"
    // Здесь вы можете использовать, например, setPage(3) для перехода на третью страницу
  };

  const handleClientInfo = () => {
    // Функция для открытия модального окна с подробной информацией о клиенте
    // Здесь вы можете вызвать функцию, открывающую модальное окно
  };

  const handleCalculation = () => {
    // Функция для перехода на страницу "Расчет"
    // Здесь вы можете использовать, например, setPage(4) для перехода на четвертую страницу
  };

  const handleCopyCalculation = () => {
    // Функция для создания копии расчета для клиента
    // Здесь вы можете добавить логику для создания копии расчета и его добавления в список расчетов
  };

  const handleDeleteCalculation = () => {
    // Функция для удаления расчета
    // Здесь вы можете добавить логику для удаления расчета из списка расчетов
  };

  const handleClose = () => {
    setPage(1);
  };

  return (
    <div className="container">

      <div>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
      </div>

      <h1>Карточка Клиента</h1>
      <button className="action-button" onClick={handleCreateCalculation}>Создать расчет</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="button-container">
              <button className="calculation-option" onClick={() => handleOptionSelect('фундамент')}>Фундамент</button>
              <button className="calculation-option" onClick={() => handleOptionSelect('каркас')}>Каркас</button>
              <button className="calculation-option" onClick={() => handleOptionSelect('крыша')}>Крыша</button>
              <button className="close-button" onClick={handleCloseModal}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
      
      <button className="action-button" onClick={handleClientInfo}>Информация о клиенте</button>
      <button className="action-button" onClick={handleCalculation}>Расчет</button>
      <button className="action-button" onClick={handleCopyCalculation}>Копировать расчет</button>
      <button className="action-button" onClick={handleDeleteCalculation}>Удалить расчет</button>
      <button className="close-button" onClick={handleClose}>Закрыть</button>
    </div>
  );
};

export default Dva;
