// Массив клиентов
const clients = [
    { name: 'Феклистов Андрей', email: 'Fekl@mail.ru' },
    { name: 'мОльков Андрей', email: 'Malyas02@mail.ru' },
  ];
  
  // Отображение списка клиентов
  function displayClients(clients) {
    const list = document.getElementById('clientList');
    list.innerHTML = '';
  
    clients.forEach((client, index) => {
      const listItem = document.createElement('li');
      const name = document.createElement('span');
      name.textContent = client.name;
      const email = document.createElement('span');
      email.textContent = client.email;
      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '✖';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = function() { removeClient(index); };
      listItem.appendChild(name);
      listItem.appendChild(email);
      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);
    });
  }
  
  // Функция для удаления клиента из списка
  function removeClient(index) {
    clients.splice(index, 1);
    displayClients(clients);
  }
  
  
  // Вызов функции для отображения клиентов
  displayClients(clients);

// Функция для отображения модального окна
function showModal() {
    document.getElementById('clientModal').style.display = 'block';
  }
  
  // Функция для скрытия модального окна
  function closeModal() {
    document.getElementById('clientModal').style.display = 'none';
  }
  
  // Обработчик событий для кнопки создания клиента
  document.getElementById('createClientBtn').addEventListener('click', showModal);
  
  // Закрыте модального окна
  document.getElementsByClassName('close')[0].addEventListener('click', closeModal);
  
  document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    createClient(`${firstName} ${lastName}`, email);
    closeModal();
  });
  
  // Функция для добавления нового клиента
  function createClient(name, email) {
    clients.push({ name, email });
    displayClients(clients);
  }
  
  // Вызов функции для отображения клиентов
  displayClients(clients);
    