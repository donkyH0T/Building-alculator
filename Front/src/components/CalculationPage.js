import React, { useState, useEffect } from 'react';
import './css/CalculationPage.css';

function CalculationPage() {
    const client = { name: 'Тестовый Тест Тестов', address: 'ул.Тестовая ул., дом 43-45', phone: 'тел. 8-900-000-00-00' };
    const object = { address: 'ул.Тестовая ул., дом 43-45', date: 'тел. 8-900-000-00-00' };

    const [calculationResults, setCalculationResults] = useState([]);
    const [isCalculationResultsOpen, setIsCalculationResultsOpen] = useState(false);
    const [isConstructiveElementOpen, setIsConstructiveElementOpen] = useState(false);

    // Симуляция загрузки данных из базы данных при загрузке компонента
    useEffect(() => {
        fetchCalculationResults().then(data => setCalculationResults(data));
    }, []);

    // Функция для загрузки данных о расчетах из базы данных (API)
    const fetchCalculationResults = async () => {
        // Здесь будет ваш запрос к API или базе данных
        // Пример:
        const response = await fetch('/api/calculation-results');
        const data = await response.json();
        return data;
    };

    return (
        <div className="container">
            <div className="name">
                <h1>{client.name}</h1>
                <p>{client.address}</p>
                <p>{client.phone}</p>
            </div>
            <button className="close-button" onClick={() => window.location.href = '/'}>X</button>
            <div className="title">
                <span className="title_text">Расчет</span>
                <button className="button action-button">Статус</button>
            </div>
            <div className="form">
                <div className="obj">
                    <p>{object.address}</p>
                    <p>{object.date}</p>
                </div>
                <button className="button action-button" onClick={() => setIsCalculationResultsOpen(!isCalculationResultsOpen)}>
                    {isCalculationResultsOpen ? 'Скрыть результаты расчета' : 'Результаты расчета'}
                </button>
                {isCalculationResultsOpen && (
                    <div className="calculation-results">
                        <h2>Результаты расчета</h2>
                        <ul>
                            {calculationResults.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className="button action-button" onClick={() => setIsConstructiveElementOpen(!isConstructiveElementOpen)}>
                    {isConstructiveElementOpen ? 'Скрыть конструктивный элемент' : 'Добавить элемент'}
                </button>
                {isConstructiveElementOpen && (
                    <div className="constructive-element">
                        {/* Здесь будет ваш конструктивный элемент */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CalculationPage;
