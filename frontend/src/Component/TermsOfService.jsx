import React from 'react';
import styled from 'styled-components';
import { FaGavel, FaUserCheck, FaMoneyBill, FaExclamationTriangle, FaBook, FaShieldAlt, FaQuestionCircle, FaInfoCircle, FaRegHandshake } from 'react-icons/fa';

const TermsOfServiceContainer = styled.div`
  padding: 40px; /* Increased padding for better spacing */
  color: #e0e0e0; /* Off-white text color */
  background-color: #e0e0e0; /* Light off-white background for the whole page */
  min-height: 100vh; /* Ensure the page takes full height */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #121212; /* Black background for each section */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Slightly more intense shadow for depth */
  padding: 30px; /* Increased padding inside the wrapper */
  margin-bottom: 2rem; /* Increased margin for spacing between sections */
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  color: black; /* Off-white color for the title */
  text-align: center;
  margin-bottom: 2rem; /* Space below the title */
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 2.5rem; /* Increase font size for prominence */
  line-height: 1.4; /* Increase line height for better readability */
`;

const Subtitle = styled.h2`
  color: #ffd700; /* Gold color for subtitles to stand out */
  margin-bottom: 1.5rem; /* Space below the subtitle */
  border-bottom: 2px solid #ffd700; /* Gold border */
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem; /* Increase font size for better visibility */
  line-height: 1.3; /* Line height for better spacing in subtitles */
`;

const Text = styled.p`
  color: #e0e0e0; /* Off-white text color for readability */
  line-height: 1.8; /* Increase line height for better readability */
  margin-bottom: 1.5rem; /* Space below each paragraph */
  font-size: 1rem; /* Standard font size for body text */
`;

const TermsOfService = () => {
  return (
    <TermsOfServiceContainer>
      <Title>Terms of Service</Title>
      <Wrapper>
        <Subtitle>
          <FaInfoCircle size={24} /> Effective Date: [Insert Date]
        </Subtitle>
        <Text>Effective from [Insert Date].</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaBook size={24} /> Introduction
        </Subtitle>
        <Text>Welcome to the Dafodils Gate Pass System. By using our services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaUserCheck size={24} /> User Responsibilities
        </Subtitle>
        <Text>Users are responsible for maintaining the confidentiality of their account and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaGavel size={24} /> Compliance
        </Subtitle>
        <Text>Users must comply with all applicable laws and regulations while using our services. Failure to do so may result in the termination of your access to our services.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaShieldAlt size={24} /> Security
        </Subtitle>
        <Text>We take reasonable measures to protect our services and user data. However, we cannot guarantee the absolute security of your data and encourage you to take your own security measures.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaMoneyBill size={24} /> Fees and Payments
        </Subtitle>
        <Text>Some services may require payment. All fees are non-refundable unless otherwise stated. By using our paid services, you agree to pay the applicable fees.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaExclamationTriangle size={24} /> Limitation of Liability
        </Subtitle>
        <Text>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the maximum extent permitted by law.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaQuestionCircle size={24} /> Changes to Terms
        </Subtitle>
        <Text>We may update these Terms of Service from time to time. Any changes will be communicated to you via email or notifications on our website.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaRegHandshake size={24} /> Contact Information
        </Subtitle>
        <Text>If you have any questions or concerns about these Terms of Service, please contact us at [Insert Contact Details].</Text>
      </Wrapper>
    </TermsOfServiceContainer>
  );
};

export default TermsOfService;
