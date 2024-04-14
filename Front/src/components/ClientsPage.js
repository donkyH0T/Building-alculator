import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ClientsPage.css';

function ClientsPage() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  useEffect(() => { 
    const fetchData = async () => { try { 
      const token = localStorage.getItem('token'); 
      const response = await fetch('http://localhost:8080/api/Manager/Customers', 
        { headers: { Authorization: `Bearer ${token} `} }); 
      const data = await response.json(); 
      setClients(data); } 
      catch (error) { console.error('Error fetching clients:', error); } }; 
      fetchData(); }, []);
  const [newClientName, setNewClientName] = useState('');
  const [newClientLastName, setNewClientLastName] = useState('');
  const [newClientSecondName, setNewClientSecondName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientAdreess, setNewClientAdreess] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClient = () => {
    const newClient = { firstname: newClientName, lastName: newClientLastName, secondName: newClientSecondName, email: newClientEmail, address: newClientAdreess, phone: newClientPhone };
    const token = localStorage.getItem('token');
    const data = { 
                  last_name: newClientLastName, 
                  first_name: newClientName, 
                  second_name: newClientSecondName,
                  phone: newClientPhone,
                  email: newClientEmail,
                  address: newClientAdreess
                };
    fetch('http://localhost:8080/api/Manager/Customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    setClients([...clients, newClient]);
    setIsModalOpen(false);
  })
  .catch(error => console.error(error));
  setIsModalOpen(false);
  };

  const handleDeleteClient = (index) => {
    console.log(index);
    const token = localStorage.getItem('token');
    const data = { 
                  id: index
                };
    fetch(`http://localhost:8080/api/Manager/Customers/${index}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    })
    .then(response => response.json())
    .then(data => {
    })
  .catch(error => console.error(error));
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => window.location.href = '/'}>←</button>
      <div className="form">
        <h2 className="title">Клиенты</h2>
        <button className="button" onClick={() => setIsModalOpen(true)}>Добавить клиента</button>
        <ul className="client-list">
          {clients.map((client, index) => (
            <li key={index} className="client-item" onClick={() => navigate(`/clients/${client.id}`, { state: { first_name: client.first_name, last_name: client.last_name, second_name: client.second_name, phone: client.phone, email: client.email, address: client.address} })}>
              {client.first_name} {client.last_name} {client.address} {client.phone}
              <button className="button" onClick={(e) => { e.stopPropagation(); handleDeleteClient(client.id); }}>Удалить</button>
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
