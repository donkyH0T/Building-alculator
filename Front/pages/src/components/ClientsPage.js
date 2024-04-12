import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ClientsPage.css'; // Подключаем CSS файл

function ClientsPage() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([{ name: 'Client 1', phone: '1234567890' }]);
  const [newClientName, setNewClientName] = useState('');
  const [newClientLastName, setNewClientLastName] = useState('');
  const [newClientSecondName, setNewClientSecondName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientAdreess, setNewClientAdreess] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClient = () => {
    setClients([...clients, { name: newClientName, phone: newClientPhone }]);
    setNewClientName('');
    setNewClientLastName('');
    setNewClientSecondName('');
    setNewClientEmail('');
    setNewClientPhone('');
    setNewClientAdreess('');
    setIsModalOpen(false);
  };

  const handleDeleteClient = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => window.location.href = '/'}>←</button>
      <button className="close-button" onClick={() => window.location.href = '/'}>X</button>
      <div className="form">
        <h2 className="title">Клиенты</h2>
        <button className="button" onClick={() => setIsModalOpen(true)}>Добавить клиента</button>
        <ul className="client-list">
          {clients.map((client, index) => (
            <li key={index} className="client-item" onClick={() => navigate(`/clients/${client.id}`)}>
              {client.name} - {client.phone}
              <button className="button" onClick={(e) => { e.stopPropagation(); handleDeleteClient(index); }}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className="modal_clients">
          <div className="form">
            <h2 className="title">Добавить клиента</h2>
            <input
              className="input"
              type="text"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
              placeholder="Фамилия"
            />
            <input
              className="input"
              type="text"
              value={newClientLastName}
              onChange={(e) => setNewClientLastName(e.target.value)}
              placeholder="Имя"
            />
            <input
              className="input"
              type="text"
              value={newClientSecondName}
              onChange={(e) => setNewClientSecondName(e.target.value)}
              placeholder="Отчество"
            />
            <input
              className="input"
              type="text"
              value={newClientPhone}
              onChange={(e) => setNewClientPhone(e.target.value)}
              placeholder="Номер телефона"
            />
            <input
              className="input"
              type="mail"
              value={newClientEmail}
              onChange={(e) => setNewClientEmail(e.target.value)}
              placeholder="E-mail"
            />
            <input
              className="input"
              type="text"
              value={newClientAdreess}
              onChange={(e) => setNewClientAdreess(e.target.value)}
              placeholder="Адрес"
            />
            <div>
              <button className="button" onClick={handleAddClient}>Добавить</button>
              <button className="button" onClick={() => setIsModalOpen(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );  
}

export default ClientsPage;
