import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h2`
  text-align: center;
  color: #282c34;
`;

const Button = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Name = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  background: none;
  color: white;
  border: none;
  font-size: 14px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: white;
  border: none;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Calculation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const AddressInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  min-width: 150px;
  text-align: right;
  margin-right: 20px;
`;

function RoofPage() {
  const [address, setAddress] = useState('');
  const [roofType, setRoofType] = useState('');
  const [roofMaterial, setRoofMaterial] = useState('');
  const [insulationMaterial, setInsulationMaterial] = useState('');
  const [insulationThickness, setInsulationThickness] = useState('');
  const [hasOpenings, setHasOpenings] = useState('');
  const { clientId } = useParams();
  const [calculations, setCalculations] = useState([]);
  const client = { name: 'Тестовый Тест Тестов', address: 'ул.Тестовая ул., дом 43-45', phone: 'тел. 8-900-000-00-00' };

  const handleSave = () => {
    if (address.trim() !== '' && roofType && roofMaterial && insulationMaterial && insulationThickness && hasOpenings) {
      const newCalculation = {
        number: calculations.length + 1,
        date: new Date().toLocaleDateString(),
        status: 'Актуален',
        address,
        roofType,
        roofMaterial,
        insulationMaterial,
        insulationThickness,
        hasOpenings
      };
      setCalculations([...calculations, newCalculation]);
      setAddress('');
      setRoofType('');
      setRoofMaterial('');
      setInsulationMaterial('');
      setInsulationThickness('');
      setHasOpenings('');
    }
  };

  const handleClear = () => {
    setAddress('');
    setRoofType('');
    setRoofMaterial('');
    setInsulationMaterial('');
    setInsulationThickness('');
    setHasOpenings('');
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <Container>
      <Name>
        <h1>{client.name}</h1>
        <p>{client.address}</p>
        <p>{client.phone}</p>
      </Name>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <Form>
        <Title>Крыша</Title>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <AddressInput
            type="text"
            placeholder="Добавить адрес объекта строительства"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button onClick={handleSave}>Сохранить</Button>
          <Button onClick={handleClear}>Очистить</Button>
        </div>
        <InputRow>
          <Label>Тип крыши:</Label>
          <Select value={roofType} onChange={(e) => setRoofType(e.target.value)}>
            <option value="">Выберите тип крыши</option>
            <option value="плоская">Плоская</option>
            <option value="скатная">Скатная</option>
            <option value="шатровая">Шатровая</option>
          </Select>
        </InputRow>
        <InputRow>
          <Label>Материал кровли:</Label>
          <Select value={roofMaterial} onChange={(e) => setRoofMaterial(e.target.value)}>
            <option value="">Выберите материал кровли</option>
            <option value="черепица">Черепица</option>
            <option value="металлочерепица">Металлочерепица</option>
            <option value="ондулин">Ондулин</option>
          </Select>
        </InputRow>
        <InputRow>
          <Label>Утеплитель:</Label>
          <Select value={insulationMaterial} onChange={(e) => setInsulationMaterial(e.target.value)}>
            <option value="">Выберите утеплитель</option>
            <option value="пенополистирол">Пенополистирол</option>
            <option value="пеноплекс">Пеноплекс</option>
            <option value="минеральная вата">Минеральная вата</option>
          </Select>
        </InputRow>
        <InputRow>
          <Label>Толщина утеплителя:</Label>
          <input type="number" value={insulationThickness} onChange={(e) => setInsulationThickness(e.target.value)} />
        </InputRow>
        <InputRow>
          <Label>Проемы:</Label>
          <Select value={hasOpenings} onChange={(e) => setHasOpenings(e.target.value)}>
            <option value="">Выберите наличие проемов</option>
            <option value="есть">Есть</option>
            <option value="нет">Нет</option>
          </Select>
        </InputRow>
        {calculations.map((calculation, index) => (
          <Calculation key={index}>
            <div>Расчет №{calculation.number}</div>
            <div>{calculation.date}</div>
            <div>{calculation.status}</div>
            <div>{calculation.address}</div>
            <div>
              <button>🗑️</button>
              <button>📋</button>
            </div>
          </Calculation>
        ))}
        <Button onClick={handleSave}>Сохранить расчет</Button>
      </Form>
    </Container>
  );
}

export default RoofPage;
