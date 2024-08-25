import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  text-align: center;
  color: #bdc3c7;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const WatchmanLandingPage = () => {
  return (
    <LandingContainer>
      <Title>Watchman Landing Page</Title>
      <Description>Welcome to the Watchman Dafodils Gate Entry Pass System. Please choose an option below.</Description>
      <ButtonContainer>
        <Link to="/visitor_entry">
          <Button>Visitor Entry</Button>
        </Link>
        <Link to="/delivery_partner_entry">
          <Button>Delivery Partner Entry</Button>
        </Link>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default WatchmanLandingPage;
