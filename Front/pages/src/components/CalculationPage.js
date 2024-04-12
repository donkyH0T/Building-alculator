import React, { useState } from 'react';
import './css/FramePage.css'; // Подключаем файл стилей

function CalculationPage() {
  const [address, setAddress] = useState('');
  const [inputValues, setInputValues] = useState({
    initialData: '',
    floorCount: '',
    firstFloor: '',
    floorHeight: '',
    outerWallPerimeter: '',
    baseArea: '',
    outerWallThickness: '',
    outerWallCladding: '',
    paroHydroInsulation: '',
    windProtection: '',
    insulation: '',
    innerWallLength: '',
    interiorWallThickness: '', // Исправлено
    osb: '', // Добавлено
    heightWindow: '', // Добавлено
    widthWindow: '', // Добавлено
    sumWindow: '', // Добавлено
    heightDoorOuter: '', // Добавлено
    widthDoorOuter: '', // Добавлено
    sumDoorOuter: '', // Добавлено
    heightDoorInner: '', // Добавлено
    widthDoorInner: '', // Добавлено
    sumDoorInner: '', // Добавлено
    floorthickness: '', // Добавлено
  });
  const [calculations, setCalculations] = useState([]);
  const client = {
    name: 'Тестовый Тест Тестов',
    address: 'ул.Тестовая ул., дом 43-45',
    phone: 'тел. 8-900-000-00-00',
  };

  const handleSave = () => {
    if (address.trim() !== '') {
      const newCalculation = {
        number: calculations.length + 1,
        date: new Date().toLocaleDateString(),
        status: 'Актуален',
        address: address,
        ...inputValues,
      };
      setCalculations([...calculations, newCalculation]);
      setAddress('');
      setInputValues({
        initialData: '',
        floorCount: '',
        firstFloor: '',
        floorHeight: '',
        outerWallPerimeter: '',
        baseArea: '',
        outerWallThickness: '',
        outerWallCladding: '',
        paroHydroInsulation: '',
        windProtection: '',
        insulation: '',
        innerWallLength: '',
        interiorWallThickness: '', // Исправлено
        osb: '', // Добавлено
        heightWindow: '', // Добавлено
        widthWindow: '', // Добавлено
        sumWindow: '', // Добавлено
        heightDoorOuter: '', // Добавлено
        widthDoorOuter: '', // Добавлено
        sumDoorOuter: '', // Добавлено
        heightDoorInner: '', // Добавлено
        widthDoorInner: '', // Добавлено
        sumDoorInner: '', // Добавлено
        floorthickness: '', // Добавлено
      });
    }
  };

  const handleClear = () => {
    setAddress('');
    setInputValues({
      initialData: '',
      floorCount: '',
      firstFloor: '',
      floorHeight: '',
      outerWallPerimeter: '',
      baseArea: '',
      outerWallThickness: '',
      outerWallCladding: '',
      paroHydroInsulation: '',
      windProtection: '',
      insulation: '',
      innerWallLength: '',
      interiorWallThickness: '', // Исправлено
      osb: '', // Добавлено
      heightWindow: '', // Добавлено
      widthWindow: '', // Добавлено
      sumWindow: '', // Добавлено
      heightDoorOuter: '', // Добавлено
      widthDoorOuter: '', // Добавлено
      sumDoorOuter: '', // Добавлено
      heightDoorInner: '', // Добавлено
      widthDoorInner: '', // Добавлено
      sumDoorInner: '', // Добавлено
      floorthickness: '', // Добавлено
    });
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <body>
      <header>
        <div className="name">
          <h1>{client.name}</h1>
          <p>{client.address}</p>
          <p>{client.phone}</p>
        </div>
        <button className="close-button" onClick={handleClose}>X</button>
      </header>
      <div className="container">
        <form className="form1">
          <h2 className="title">Каркас</h2>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <input
              type="text"
              className="address-input"
              placeholder="Добавить адрес объекта строительства"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="button" onClick={handleSave}>Сохранить</button>
            <button className="button" onClick={handleClear}>Очистить</button>
          </div>
          <div className="input-row">
        <label className="label1">Исходные данные:</label>
        <input
            type="text"
            name="initialData"
            value={inputValues.initialData}
            onChange={handleInputChange}
            />
            </div>
            <div className="input-row">
            <label className="label">Количество этажей:</label>
            <input
                type="text"
                name="floorCount"
                value={inputValues.floorCount}
                onChange={handleInputChange}
            />
            </div>
            <div className="input-row">
            <label className="label">Первый этаж:</label>
            <input
                type="text"
                name="firstFloor"
                value={inputValues.firstFloor}
                onChange={handleInputChange}
            />
            </div>
            <div className="input-row">
            <label className="label">Высота этажа:</label>
            <input
                type="text"
                name="floorHeight"
                value={inputValues.floorHeight}
                onChange={handleInputChange}
            />
            </div>
            <div className="input-row">
            <label className="label">Периметр наружных стен:</label>
            <input
                type="text"
                name="outerWallPerimeter"
                value={inputValues.outerWallPerimeter}
                onChange={handleInputChange}
            />
            </div>
            <div className="input-row">
        <label className="label">Исходные данные:</label>
        <input
            type="text"
            name="initialData"
            value={inputValues.initialData}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Количество этажей:</label>
        <input
            type="text"
            name="floorCount"
            value={inputValues.floorCount}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Первый этаж:</label>
        <input
            type="text"
            name="firstFloor"
            value={inputValues.firstFloor}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Высота этажа:</label>
        <input
            type="text"
            name="floorHeight"
            value={inputValues.floorHeight}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Периметр наружных стен:</label>
        <input
            type="text"
            name="outerWallPerimeter"
            value={inputValues.outerWallPerimeter}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Площадь основания:</label>
        <input
            type="text"
            name="baseArea"
            value={inputValues.baseArea}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Толщина внешних стен:</label>
        <select
            name="outerWallThickness"
            value={inputValues.outerWallThickness}
            onChange={handleInputChange}
        >
            <option value="Выбор большой">большая</option>
            <option value="Выбор средней">средняя</option>
            <option value="Выбор маленькой">маленькая</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Длина внутренних стен:</label>
        <input
            type="number"
            name="baseArea"
            value={inputValues.baseArea}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Толщина внутренних стен:</label>
        <select
            name="interiorWallThickness"
            value={inputValues.interiorWallThickness}
            onChange={handleInputChange}
        >
            <option value="Выбор большой">большая</option>
            <option value="Выбор средней">средняя</option>
            <option value="Выбор маленькой">маленькая</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label1">Обшивка внешних стен:</label>
        </div>
        <div className="input-row">
        <label className="label">ОСБ:</label>
        <select
            name="osb"
            value={inputValues.osb}
            onChange={handleInputChange}
        >
            <option value="Выбор 1">1</option>
            <option value="Выбор 2">2</option>
            <option value="Выбор 3">3</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Парогидроизоляция:</label>
        <select
            name="paroHydroInsulation"
            value={inputValues.paroHydroInsulation}
            onChange={handleInputChange}
        >
            <option value="Выбор 1">1</option>
            <option value="Выбор 2">2</option>
            <option value="Выбор 3">3</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Ветрозащита:</label>
        <select
            name="windProtection"
            value={inputValues.windProtection}
            onChange={handleInputChange}
        >
            <option value="Выбор 1">1</option>
            <option value="Выбор 2">2</option>
            <option value="Выбор 3">3</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Утеплитель:</label>
        <select
            name="insulation"
            value={inputValues.insulation}
            onChange={handleInputChange}
        >
            <option value="Выбор 1">1</option>
            <option value="Выбор 2">2</option>
            <option value="Выбор 3">3</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">ОСБ:</label>
        <select
            name="osb"
            value={inputValues.osb}
            onChange={handleInputChange}
        >
            <option value="Выбор 1">1</option>
            <option value="Выбор 2">2</option>
            <option value="Выбор 3">3</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label1">Оконные проёмы:</label>
        </div>
        <div className="input-row">
        <label className="label2">Высота</label>
        <label className="label2">Ширина</label>
        <label className="label2">Количество</label>
        </div>
        <div className="input-row">
        <input
            type="number"
            name="heightWindow"
            value={inputValues.heightWindow}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="widthWindow"
            value={inputValues.widthWindow}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="sumWindow"
            value={inputValues.sumWindow}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label1">Дверные проёмы внешние:</label>
        </div>
        <div className="input-row">
        <label className="label2">Высота</label>
        <label className="label2">Ширина</label>
        <label className="label2">Количество</label>
        </div>
        <div className="input-row">
        <input
            type="number"
            name="heightDoorOuter"
            value={inputValues.heightDoorOuter}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="widthDoorOuter"
            value={inputValues.widthDoorOuter}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="sumDoorOuter"
            value={inputValues.sumDoorOuter}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label1">Дверные проёмы внутренние:</label>
        </div>
        <div className="input-row">
        <label className="label2">Высота</label>
        <label className="label2">Ширина</label>
        <label className="label2">Количество</label>
        </div>
        <div className="input-row">
        <input
            type="number"
            name="heightDoorInner"
            value={inputValues.heightDoorInner}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="widthDoorInner"
            value={inputValues.widthDoorInner}
            onChange={handleInputChange}
        />
        <input
            type="number"
            name="sumDoorInner"
            value={inputValues.sumDoorInner}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">Толщина перекрытия:</label>
        <input
            type="number"
            name="floorthickness"
            value={inputValues.floorthickness}
            onChange={handleInputChange}
        />
        </div>
        <div className="input-row">
        <label className="label">ОСБ</label>
        <select
            name="osb"
            value={inputValues.osb}
            onChange={handleInputChange}
        >
            <option value="Выбор большая">большая</option>
            <option value="Выбор средняя">средняя</option>
            <option value="Выбор маленькая">маленькая</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Парогидроизоляция:</label>
        <select
            name="paroHydroInsulation"
            value={inputValues.paroHydroInsulation}
            onChange={handleInputChange}
        >
            <option value="Выбор большая">большая</option>
            <option value="Выбор средняя">средняя</option>
            <option value="Выбор маленькая">маленькая</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Ветрозащита:</label>
        <select
            name="windProtection"
            value={inputValues.windProtection}
            onChange={handleInputChange}
        >
            <option value="Выбор большая">большая</option>
            <option value="Выбор средняя">средняя</option>
            <option value="Выбор маленькая">маленькая</option>
        </select>
        </div>
        <div className="input-row">
        <label className="label">Утеплитель:</label>
        <select
            name="insulation"
            value={inputValues.insulation}
            onChange={handleInputChange}
        >
            <option value="Выбор большая">большая</option>
            <option value="Выбор средняя">средняя</option>
            <option value="Выбор маленькая">маленькая</option>
        </select>
        </div>
        <button className='btn_save' onClick={handleSave}>Сохранить расчет</button>



    {/* Другие поля ввода */}

    </form>
      </div>
    </body>
  );
}

export default CalculationPage;
