import React from 'react';
import styled from 'styled-components';
import { FaLock, FaUserShield, FaShieldAlt, FaCookieBite, FaExternalLinkAlt, FaInfoCircle, FaRegHandshake, FaRegClock, FaPhoneAlt } from 'react-icons/fa';

const PrivacyPolicyContainer = styled.div`
  padding: 40px; /* Increased padding for better spacing */
  color: #e0e0e0; /* Off-white text color to match TermsOfService */
  background-color: #e0e0e0; /* Light off-white background to match TermsOfService */
  min-height: 100vh; /* Ensure the page takes full height */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #121212; /* Black background for each section to match TermsOfService */
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

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <Title>Privacy Policy</Title>
      <Wrapper>
        <Subtitle>
          <FaRegClock size={24} /> Effective Date: [Insert Date]
        </Subtitle>
        <Text>Effective from [Insert Date].</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaInfoCircle size={24} /> Introduction
        </Subtitle>
        <Text>Welcome to the Dafodils Gate Pass System. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share your information when you use our services.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaUserShield size={24} /> Information Collection
        </Subtitle>
        <Text>We collect various types of information, including personal information (such as your name, contact details, and visit records) through forms, cookies, and automated means.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaShieldAlt size={24} /> Use of Information
        </Subtitle>
        <Text>We use the collected information to manage gate entries, ensure security, and communicate with users. We may also use the information for other purposes with your consent.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaRegHandshake size={24} /> Information Sharing
        </Subtitle>
        <Text>We do not share your information with third parties except as necessary to provide our services, comply with legal requirements, or with your consent. Any information shared is done so securely and in compliance with applicable laws.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaLock size={24} /> Data Security
        </Subtitle>
        <Text>We implement industry-standard measures to protect your information, including encryption, access controls, and secure storage. We are committed to maintaining the confidentiality and integrity of your data.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaPhoneAlt size={24} /> User Rights
        </Subtitle>
        <Text>You have the right to access, correct, and delete your personal information. To exercise these rights, please contact us at [Insert Contact Details].</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaCookieBite size={24} /> Cookies and Tracking
        </Subtitle>
        <Text>We use cookies and other tracking technologies to enhance your experience. You can manage your cookie preferences through your browser settings.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaExternalLinkAlt size={24} /> Third-Party Links
        </Subtitle>
        <Text>Our services may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaRegClock size={24} /> Changes to the Privacy Policy
        </Subtitle>
        <Text>We may update this privacy policy from time to time. Any changes will be communicated to you via email or notifications on our website.</Text>
      </Wrapper>
      <Wrapper>
        <Subtitle>
          <FaPhoneAlt size={24} /> Contact Information
        </Subtitle>
        <Text>If you have any questions or concerns about this privacy policy, please contact us at [Insert Contact Details].</Text>
      </Wrapper>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
