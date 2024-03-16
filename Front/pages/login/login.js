function checkPassword() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Проверка простого пароля (пример)
    if (password === 'Alex') {
    message.textContent = `Добро пожаловать, ${username}!`;
    message.style.color = "green"
    } else {
    message.textContent = 'Неверное имя пользователя или пароль.';
    message.style.color = "red"
    }
}