// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Component/Footer';
import Toggle from './Component/Toggle';
import Accordion from './Component/Accordion';
import Navbar from './Component/Navbar';
import EntryPage from './Component/EntryPage';
import VisitorLoginPage from './Component/VisitorLoginPage';
import VisitorRegisterPage from './Component/VisitorRegisterPage';
import WatchmanLoginPage from './Component/WatchmanLoginPage';
import WatchmanLandingPage from './Component/WatchmanLandingPage';
import SocietyMemberLoginPage from './Component/SocietyMemberLoginPage';
import SocietyMemberLandingPage from './Component/SocietyMemberLandingPage';
import VisitorEntryPage from './Component/VisitorEntryPage';
import DeliveryPartnerEntryPage from './Component/DeliveryPartnerEntryPage';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsOfService from './Component/TermsOfService';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000000; /* Dark black background color */
  color: #f8f9fa; /* Off-white text color */
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 56px; /* Height of the navbar */
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Accordion />} />
            <Route path="/features" element={<Toggle />} />
            <Route path="/visitor_login" element={<VisitorLoginPage />} />
            <Route path="/visitor_register" element={<VisitorRegisterPage />} />
            <Route path="/watchman_login" element={<WatchmanLoginPage />} />
            <Route path="/watchman_landing" element={<WatchmanLandingPage />} />
            <Route path="/society_member_login" element={<SocietyMemberLoginPage />} />
            <Route path="/society_member_landing" element={<SocietyMemberLandingPage />} />
            <Route path="/visitor_entry" element={<VisitorEntryPage />} />
            <Route path="/entry" element={<EntryPage />} />
            <Route path="/delivery_partner_entry" element={<DeliveryPartnerEntryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
