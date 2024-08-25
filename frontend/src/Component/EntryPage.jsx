import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EntryPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://static.designboom.com/wp-content/dbsub/398631/2023-03-20/prefecture-of-attica-10-6418366909a72.jpg'); /* Add your image path here */
  background-size: cover;
  background-position: center;
  color: #f8f9fa; /* Off-white text color */
`;


const LoginContainer = styled.div`
  background-color: #f8f9fa; /* Off-white background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LoginButton = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
`;

const SocietyInfo = styled.div`
  margin-top: 20px;
  color: #000000; /* Black text color */
`;


const EntryPage = () => {
    return (
        <EntryPageContainer>
            <LoginContainer>
                <h2>Welcome Visitor</h2>
                <p>Please login to access the system</p>
                <LoginButton to="/visitor_login">Login</LoginButton>
                <SocietyInfo>
                    <h3>About Our Society</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel nisi sed.</p>
                    <p>Integer at sapien urna. Sed eget metus vel nulla scelerisque scelerisque nec et risus.</p>
                </SocietyInfo>
            </LoginContainer>
        </EntryPageContainer>
    );
};

export default EntryPage;
