import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

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

const SecondaryButton = styled(Button)`
  background-color: #1abc9c;

  &:hover {
    background-color: #16a085;
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

const QrCodeContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const IdCardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #2c3e50;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const IdCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #2980b9;
  font-weight: bold;
`;

const IdCardDetail = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const VisitorEntryPage = () => {
  const [flatNumber, setFlatNumber] = useState('');
  const [date, setDate] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [showIdCard, setShowIdCard] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const [visitorDetails, setVisitorDetails] = useState({});
  const idCardRef = useRef(null);
  const qrCodeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      flatNumber,
      date,
      entryTime,
      vehicleNumber,
    };
    setVisitorDetails(details);
    const qrMessage = `Visitor Entry Details:\nFlat/Room Number: ${flatNumber}\nDate: ${date}\nEntry Time: ${entryTime}\nVehicle Number: ${vehicleNumber}`;
    setQrValue(qrMessage);
    
    setFlatNumber('');
    setDate('');
    setEntryTime('');
    setVehicleNumber('');
  };

  const handleGenerateIdCard = () => {
    setShowIdCard(true);
    setShowQrCode(false);
  };

  const handleGenerateQrCode = () => {
    setShowQrCode(true);
    setShowIdCard(false);
  };

  const downloadQrCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'visitor_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadIdCard = () => {
    toPng(idCardRef.current)
      .then((dataUrl) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'visitor_id_card.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch((error) => {
        console.error('Failed to generate image:', error);
      });
  };

  return (
    <Background>
      <EntryContainer>
        <Title>Visitor Entry</Title>
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
          <Label>Vehicle Number:</Label>
          <Input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
        {qrValue && (
          <>
            <SecondaryButton type="button" onClick={handleGenerateIdCard} style={{ marginTop: '10px' }}>
              Generate ID Card
            </SecondaryButton>
            <SecondaryButton type="button" onClick={handleGenerateQrCode} style={{ marginTop: '10px' }}>
              Generate QR Code
            </SecondaryButton>
          </>
        )}
        {showQrCode && (
          <QrCodeContainer ref={qrCodeRef}>
            <QRCode value={qrValue} size={256} />
            <Button onClick={downloadQrCode} style={{ marginTop: '10px' }}>
              Download QR Code
            </Button>
          </QrCodeContainer>
        )}
        {showIdCard && (
          <IdCardContainer ref={idCardRef}>
            <IdCardTitle>Visitor ID Card</IdCardTitle>
            <IdCardDetail>Flat/Room Number: {visitorDetails.flatNumber}</IdCardDetail>
            <IdCardDetail>Date: {visitorDetails.date}</IdCardDetail>
            <IdCardDetail>Entry Time: {visitorDetails.entryTime}</IdCardDetail>
            <IdCardDetail>Vehicle Number: {visitorDetails.vehicleNumber}</IdCardDetail>
            <Button onClick={downloadIdCard} style={{ marginTop: '10px' }}>
              Download ID Card
            </Button>
          </IdCardContainer>
        )}
      </EntryContainer>
    </Background>
  );
};

export default VisitorEntryPage;
