import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #000000; /* Dark black background color */
  color: #f8f9fa; /* Off-white text color */
  padding: 20px 0; /* Adjusted padding for better spacing */
  text-align: center;
  width: 100%;
`;

const FooterLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// const ContactInfo = styled.div`
//   margin-top: 10px;
//   font-size: 14px;
// `;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #f8f9fa;
  font-size: 20px;
  &:hover {
    color: #3498db; /* Change color on hover */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Dafodils Security System. All rights reserved.</p>
      <p>
        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink> | <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
      </p>
      {/* <ContactInfo>
        Contact us: <a href="mailto:info@dafodilssecurity.com">info@dafodilssecurity.com</a> | +91-7391836417
      </ContactInfo> */}
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
