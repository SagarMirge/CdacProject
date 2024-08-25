import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  max-width: 400px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #ecf0f1;
  font-size: 14px;
  width: 100%;
  text-align: left;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 70%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #7f8c8d;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const SocietyMemberLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Society member logging in with', { email, password });
    // Assuming the login is successful, navigate to the Society Member landing page
    navigate('/society_member_landing');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <Title>Society Member Login</Title>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label>Password:</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </TogglePasswordButton>
        </InputContainer>
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default SocietyMemberLoginPage;
