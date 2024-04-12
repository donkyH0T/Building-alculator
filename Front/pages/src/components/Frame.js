import React, { useState } from 'react';
import './css/FramePage.css';

function FramePage() {
  const [address, setAddress] = useState('');
  const [floorFields, setFloorFields] = useState([{ floorNumber: 1, floorHeight: '', outerWallPerimeter: '', baseArea: '', outerWallThickness: '', outerWallCladding: '', paroHydroInsulation: '', windProtection: '', insulation: '', innerWallLength: '', interiorWallThickness: '', osb: '', heightWindow: '', widthWindow: '', sumWindow: '', heightDoorOuter: '', widthDoorOuter: '', sumDoorOuter: '', heightDoorInner: '', widthDoorInner: '', sumDoorInner: '', floorthickness: '' }]);
  const [doorWindows, setDoorWindows] = useState([{ height: '', width: '', count: '' }]);
  const [outerDoors, setOuterDoors] = useState([{ height: '', width: '', count: '' }]);
  const [innerDoors, setInnerDoors] = useState([{ height: '', width: '', count: '' }]);
  const [floorCount, setFloorCount] = useState(1);

  const client = {
    name: 'Тестовый Тест Тестов',
    address: 'ул.Тестовая ул., дом 43-45',
    phone: 'тел. 8-900-000-00-00',
  };

  const handleDoorWindowChange = (index, name, value) => {
    const updatedDoorWindows = [...doorWindows];
    updatedDoorWindows[index][name] = value;
    setDoorWindows(updatedDoorWindows);
  };

  const handleOuterDoorChange = (index, name, value) => {
    const updatedOuterDoors = [...outerDoors];
    updatedOuterDoors[index][name] = value;
    setOuterDoors(updatedOuterDoors);
  };

  const handleInnerDoorChange = (index, name, value) => {
    const updatedInnerDoors = [...innerDoors];
    updatedInnerDoors[index][name] = value;
    setInnerDoors(updatedInnerDoors);
  };

  const handleAddDoorWindow = () => {
    setDoorWindows([...doorWindows, { height: '', width: '', count: '' }]);
  };

  const handleAddOuterDoor = () => {
    setOuterDoors([...outerDoors, { height: '', width: '', count: '' }]);
  };

  const handleAddInnerDoor = () => {
    setInnerDoors([...innerDoors, { height: '', width: '', count: '' }]);
  };

  const handleSave = () => {
    // Ваша функция сохранения
  };

  const handleClear = () => {
    setAddress('');
    setFloorFields([]);
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAddFloors = () => {
    const newFloorCount = floorCount + 1;
    setFloorCount(newFloorCount);

    setFloorFields((prevFloorFields) => [
      ...prevFloorFields,
      {
        floorNumber: newFloorCount,
        floorHeight: '',
        outerWallPerimeter: '',
        baseArea: '',
        outerWallThickness: '',
        outerWallCladding: '',
        paroHydroInsulation: '',
        windProtection: '',
        insulation: '',
        innerWallLength: '',
        interiorWallThickness: '',
        osb: '',
        heightWindow: '',
        widthWindow: '',
        sumWindow: '',
        heightDoorOuter: '',
        widthDoorOuter: '',
        sumDoorOuter: '',
        heightDoorInner: '',
        widthDoorInner: '',
        sumDoorInner: '',
        floorthickness: '',
      },
    ]);
  };

  const handleFloorFieldChange = (index, fieldName, value) => {
    setFloorFields((prevFloorFields) => {
      const updatedFloorFields = [...prevFloorFields];
      updatedFloorFields[index] = {
        ...updatedFloorFields[index],
        [fieldName]: value,
      };
      return updatedFloorFields;
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
              onChange={handleInputChange}
            />
            <button className="button" onClick={handleSave}>Сохранить</button>
            <button className="button" onClick={handleClear}>Очистить</button>
          </div>
          <div className="input-row">
            <label className="label1">Исходные данные:</label>
          </div>
          <div className="input-row">
            <label className="label">Этаж:</label>
            <button className="button" type="button" onClick={handleAddFloors}>Добавить</button>
          </div>
          {floorFields.map((floor, index) => (
            <div key={`floor_${index}`}>
              <div className="input-row">
                <label className="label1">Этаж {floor.floorNumber}:</label>
              </div>
              <div className="input-row">
                <label className="label">Высота этажа:</label>
                <input
                  type="number"
                  value={floor.floorHeight}
                  onChange={(e) => handleFloorFieldChange(index, 'floorHeight', e.target.value)}
                />
              </div>
              <div className="input-row">
                <label className="label">Периметр наружных стен:</label>
                <input
                  type="number"
                  value={floor.outerWallPerimeter}
                  onChange={(e) => handleFloorFieldChange(index, 'outerWallPerimeter', e.target.value)}
                />
              </div>
              <div className="input-row">
                <label className="label">Площадь основания:</label>
                <input
                  type="number"
                  value={floor.baseArea}
                  onChange={(e) => handleFloorFieldChange(index, 'baseArea', e.target.value)}
                />
              </div>
              <div className="input-row">
                <label className="label">Толщина внешних стен:</label>
                <select
                  value={floor.outerWallThickness}
                  onChange={(e) => handleFloorFieldChange(index, 'outerWallThickness', e.target.value)}
                >
                  <option value="Выбор большая">большая</option>
                  <option value="Выбор средняя">средняя</option>
                  <option value="Выбор маленькая">маленькая</option>
                </select>
              </div>
          <div className="input-row">
            <label className="label">Длина внутренних стен:</label>
            <input
              type="number"
              value={floor.innerWallLength}
              onChange={(e) => handleFloorFieldChange(index, 'innerWallLength', e.target.value)}
            />
          </div>
          <div className="input-row">
            <label className="label">Толщина внутренних стен:</label>
            <select
              value={floor.interiorWallThickness}
              onChange={(e) => handleFloorFieldChange(index, 'interiorWallThickness', e.target.value)}

            >
              <option value="Выбор большая">большая</option>
              <option value="Выбор средняя">средняя</option>
              <option value="Выбор маленькая">маленькая</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label1">Обшивка внешних стен:</label>
          </div>
          <div className="input-row">
            <label className="label">ОСБ:</label>
            <select
              value={floor.osb}
              onChange={(e) => handleFloorFieldChange(index, 'osb', e.target.value)}
            >
              <option value="9">9 мм</option>
              <option value="10">10 мм</option>
              <option value="15">15 мм</option>
              <option value="18">18 мм</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Парогидроизоляция:</label>
            <select
              value={floor.paroHydroInsulation}
              onChange={(e) => handleFloorFieldChange(index, 'paroHydroInsulation', e.target.value)}
            >
              <option value="Ondutis">Ондутис</option>
              <option value="Axton">Пароизоляция Axton (b)</option>
              <option value="Utafol">Пароизоляционная пленка Ютафол Н 96 Сильвер</option>
              <option value="Bparo">Пароизоляция В</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Ветрозащита:</label>
            <select
              value={floor.windProtection}
              onChange={(e) => handleFloorFieldChange(index, 'windProtection', e.target.value)}
            >
              <option value="Brane">Ветро-влагозащитная мембрана Brane А</option>
              <option value="Optima">Паропроницаемая ветро-влагозащита A Optima</option>
              <option value="TypeA">Гидро-ветрозащита Тип А</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Утеплитель:</label>
            <select
              value={floor.insulation}
              onChange={(e) => handleFloorFieldChange(index, 'insulation', e.target.value)}
            >
              <option value="TeploKnauf">Кнауф ТеплоКнауф 100 мм</option>
              <option value="Technonicol">Технониколь 100 мм</option>
              <option value="Ekover100">Эковер 100 мм</option>
              <option value="Ekover150">Эковер 150 мм</option>
              <option value="Ekover200">Эковер 200 мм</option>
              <option value="Ekover250">Эковер 250 мм</option>
            </select>
          </div>
          {/* Оконные проемы */}
          <div className="input-row">
            <label className="label1">Оконные проёмы:</label>
          </div>
          <div className="input-row">
            <label className="label2">Высота</label>
            <label className="label2">Ширина</label>
            <label className="label2">Количество</label>
          </div>
          {doorWindows.map((doorWindow, index) => (
            <div className="input-row" key={`doorWindow_${index}`}>
              <input
                type="number"
                value={doorWindow.height}
                onChange={(e) => handleDoorWindowChange(index, 'height', e.target.value)}
              />
              <input
                type="number"
                value={doorWindow.width}
                onChange={(e) => handleDoorWindowChange(index, 'width', e.target.value)}
              />
              <input
                type="number"
                value={doorWindow.count}
                onChange={(e) => handleDoorWindowChange(index, 'count', e.target.value)}
              />
            </div>
          ))}
          <button className="button" type="button" onClick={handleAddDoorWindow}>+</button>
          {/* Внешние дверные проемы */}
          <div className="input-row">
            <label className="label1">Дверные проёмы внешние:</label>
          </div>
          <div className="input-row">
            <label className="label2">Высота</label>
            <label className="label2">Ширина</label>
            <label className="label2">Количество</label>
          </div>
          {outerDoors.map((outerDoor, index) => (
            <div className="input-row" key={`outerDoor_${index}`}>
              <input
                type="number"
                value={outerDoor.height}
                onChange={(e) => handleDoorWindowChange(index, 'height', e.target.value)}
              />
              <input
                type="number"
                value={outerDoor.width}
                onChange={(e) => handleDoorWindowChange(index, 'width', e.target.value)}
              />
              <input
                type="number"
                value={outerDoor.count}
                onChange={(e) => handleDoorWindowChange(index, 'count', e.target.value)}
              />
            </div>
          ))}
          <button className="button" type="button" onClick={handleAddOuterDoor}>+</button>
          {/* Внутренние дверные проемы */}
          <div className="input-row">
            <label className="label1">Дверные проёмы внутренние:</label>
          </div>
          <div className="input-row">
            <label className="label2">Высота</label>
            <label className="label2">Ширина</label>
            <label className="label2">Количество</label>
          </div>
          {innerDoors.map((innerDoor, index) => (
            <div className="input-row" key={`innerDoor_${index}`}>
              <input
                type="number"
                value={innerDoor.height}
                onChange={(e) => handleDoorWindowChange(index, 'height', e.target.value)}
              />
              <input
                type="number"
                value={innerDoor.width}
                onChange={(e) => handleDoorWindowChange(index, 'width', e.target.value)}
              />
              <input
                type="number"
                value={innerDoor.count}
                onChange={(e) => handleDoorWindowChange(index, 'count', e.target.value)}
              />
            </div>
          ))}
          <button className="button" type="button" onClick={handleAddInnerDoor}>+</button>
          <div className="input-row">
            <label className="label">Толщина перекрытия:</label>
            <input
              type="number"
              value={floor.floorthickness}
              onChange={(e) => handleDoorWindowChange(index, 'floorthickness', e.target.value)}
            />
          </div>
          <div className="input-row">
            <label className="label">ОСБ</label>
            <select
              value={floor.osb}
              onChange={(e) => handleDoorWindowChange(index, 'osb1', e.target.value)}
            >
              <option value="9">9 мм</option>
              <option value="10">10 мм</option>
              <option value="15">15 мм</option>
              <option value="18">18 мм</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Парогидроизоляция:</label>
            <select
              value={floor.paroHydroInsulation}
              onChange={(e) => handleDoorWindowChange(index, 'paroHydroInsulation1', e.target.value)}
            >
              <option value="Ondutis">Ондутис</option>
              <option value="Axton">Пароизоляция Axton (b)</option>
              <option value="Utafol">Пароизоляционная пленка Ютафол Н 96 Сильвер</option>
              <option value="Bparo">Пароизоляция В</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Ветрозащита:</label>
            <select
              value={floor.windProtection}
              onChange={(e) => handleDoorWindowChange(index, 'windProtection1', e.target.value)}
            >
              <option value="Brane">Ветро-влагозащитная мембрана Brane А</option>
              <option value="Optima">Паропроницаемая ветро-влагозащита A Optima</option>
              <option value="TypeA">Гидро-ветрозащита Тип А</option>
            </select>
          </div>
          <div className="input-row">
            <label className="label">Утеплитель:</label>
            <select
              value={floor.insulation}
              onChange={(e) => handleDoorWindowChange(index, 'insulation1', e.target.value)}
            >
              <option value="TeploKnauf">Кнауф ТеплоКнауф 100 мм</option>
              <option value="Technonicol">Технониколь 100 мм</option>
              <option value="Ekover100">Эковер 100 мм</option>
              <option value="Ekover150">Эковер 150 мм</option>
              <option value="Ekover200">Эковер 200 мм</option>
              <option value="Ekover250">Эковер 250 мм</option>
            </select>
            </div>
            </div>
          ))}
          {/* Другие поля формы здесь */}
          <button className='btn_save' onClick={handleSave}>Сохранить расчет</button>
        </form>
      </div>
    </body>
  );
}

export default FramePage;
