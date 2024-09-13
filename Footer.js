import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 TopPrint Pro. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
