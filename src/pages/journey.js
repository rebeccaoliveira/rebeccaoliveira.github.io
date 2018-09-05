import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart-blue.png";
import HeaderHome from '../components/HeaderHome';
import MyCv from '../components/MyCv';
import Footer from '../components/Footer';


const Journey = () => (
  <div>
    <Helmet
      title="Rebecca Oliveira -  Journey"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container>
      <HeaderHome />
      <MyCv />
      <Footer />
    </Container>
  </div>
);

export default Journey;
