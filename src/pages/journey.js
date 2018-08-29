import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart.png";
import HeaderHome from '../components/HeaderHome';
import MyCv from '../components/MyCv';
import Footer from '../components/Footer';


const Journey = () => (
  <div>
    <Container>
      <HeaderHome />
      <MyCv />
      <Footer />
    </Container>
  </div>
);

export default Journey;
