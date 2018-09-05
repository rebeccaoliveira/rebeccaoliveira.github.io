import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart.png";
import ContactPage from '../components/ContactPage';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';



const Contact = () => (
  <div>
    <Container>
    <Helmet
      title="Rebecca Oliveira - Contact"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <HeaderHome />
      <ContactPage />
      <Footer />
    </Container>
  </div>
);

export default Contact;
