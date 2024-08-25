import React, { useState } from 'react';
import styled from 'styled-components';

const EntryContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: rgba(44, 62, 80, 0.85);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;
  font-size: 28px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #ecf0f1;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f9fa;
  color: #2c3e50;
  margin-bottom: 15px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 20px;
`;

const DeliveryPartnerEntryPage = () => {
  const [flatNumber, setFlatNumber] = useState('');
  const [date, setDate] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState(''); // Define exitTime and setExitTime

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      flatNumber,
      date,
      entryTime,
      exitTime,
    };
    console.log('Delivery Partner Entry Details:', details);
    setFlatNumber('');
    setDate('');
    setEntryTime('');
    setExitTime(''); // Clear the exitTime field
  };

  return (
    <Background>
      <EntryContainer>
        <Title>Delivery Partner Entry</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Flat/Room Number:</Label>
          <Input
            type="text"
            value={flatNumber}
            onChange={(e) => setFlatNumber(e.target.value)}
            required
          />
          <Label>Current Date:</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Label>Entry Time:</Label>
          <Input
            type="time"
            value={entryTime}
            onChange={(e) => setEntryTime(e.target.value)}
            required
          />
          <Label>Exit Time:</Label>
          <Input
            type="time"
            value={exitTime}
            onChange={(e) => setExitTime(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </EntryContainer>
    </Background>
  );
};

export default DeliveryPartnerEntryPage;
