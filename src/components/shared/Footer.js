import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  min-height: 10vh;
`;

const Footer = () => (
  <Container>
    <p>
      by <Link to="/">Devsaurus</Link> &copy; 2021
    </p>
  </Container>
);

export default Footer;
