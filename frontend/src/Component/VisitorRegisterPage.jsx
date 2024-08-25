import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
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
  color: #333;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
  position: relative;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  margin-top: 20px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${(props) => (props.success ? '#28a745' : '#e74c3c')};
`;

const VisitorRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess('');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/visitors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, contactNumber, address }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        setError(`Registration failed: ${errorData}`);
        setSuccess('');
      } else {
        setSuccess('Registration successful!');
        setError('');
        navigate('/visitor_login');
      }
    } catch (error) {
      setError('An error occurred while trying to register. Please try again.');
      setSuccess('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegisterContainer>
      <Title>Visitor Registration</Title>
      <Form onSubmit={handleRegister}>
        <div style={{ width: '100%' }}>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ width: '100%' }}>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ width: '100%' }}>
          <Label>Contact Number:</Label>
          <Input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div style={{ width: '100%' }}>
          <Label>Address:</Label>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
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
        </div>
        <div style={{ width: '100%' }}>
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Register</Button>
        {error && <Message>{error}</Message>}
        {success && <Message success>{success}</Message>}
      </Form>
    </RegisterContainer>
  );
};

export default VisitorRegisterPage;
