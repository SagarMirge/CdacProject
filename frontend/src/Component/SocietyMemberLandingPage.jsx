import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2c3e50; /* Dark black */
  color: #ecf0f1; /* Off-white */
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const WelcomeMessage = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #e74c3c; /* Red */
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c0392b; /* Darker red on hover */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  background-color: #34495e; /* Dark blue */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #3498db; /* Blue */
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

const GeneratedIdContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #34495e; /* Dark blue */
  border-radius: 10px;
  color: #ecf0f1; /* Off-white */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 200px;
  height: 200px;
  margin-bottom: 1.5rem;
`;

const SocietyMemberLandingPage = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorPurpose, setVisitorPurpose] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [date, setEntryDate] = useState('');
  const [generatedId, setGeneratedId] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleLogout = () => {
    console.log('Society member logged out');
    window.location.href = '/'; // Redirect to home page or login page
  };

  const handleVisitorDetailsSubmit = (e) => {
    e.preventDefault();
    const qrMessage = `Visitor's Details:\nName: ${visitorName}\nPurpose: ${visitorPurpose}\nEntry Time: ${entryTime}\nDate: ${date}`;
    setGeneratedId(qrMessage);
    setQrCodeValue(qrMessage);
    setVisitorName('');
    setVisitorPurpose('');
    setEntryTime('');
    setEntryDate('');
  };

  const downloadQRCode = () => {
    const qrElement = document.getElementById('qrCodeElement');
    toPng(qrElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Could not generate QR code image', error);
      });
  };

  return (
    <LandingContainer>
      <Title>Welcome, Society Member!</Title>
      <WelcomeMessage>
        This is your dashboard where you can view your profile, manage your account,
        and access society-related information. Stay tuned for more updates.
      </WelcomeMessage>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>

      <Form onSubmit={handleVisitorDetailsSubmit}>
        <Input
          type="text"
          placeholder="Visitor Name"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Purpose of Visit"
          value={visitorPurpose}
          onChange={(e) => setVisitorPurpose(e.target.value)}
          required
        />
        <Input
          type="time"
          value={entryTime}
          onChange={(e) => setEntryTime(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setEntryDate(e.target.value)}
          required
        />
        <Button type="submit">Generate QR Code</Button>
      </Form>

      {generatedId && (
        <GeneratedIdContainer>
          <QRCodeContainer id="qrCodeElement">
            <QRCode value={qrCodeValue} />
          </QRCodeContainer>
          <Button onClick={downloadQRCode}>Download QR Code</Button>
        </GeneratedIdContainer>
      )}
    </LandingContainer>
  );
};

export default SocietyMemberLandingPage;
