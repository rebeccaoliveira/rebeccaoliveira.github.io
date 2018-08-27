import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart.png";
import HeaderAbout from '../components/headerabout';
import BoxAbout from '../components/boxabout';
import Footer from '../components/Footer';


const ContainerGradient = styled(Container)`
  background: linear-gradient(#d6fffb78,#ffffff,#fadae79c);
`

const About = () => (
  <div>
    <Menu/>
    <ContainerGradient fluid>
      <HeaderAbout/>
      <BoxAbout/>
      <Footer/>
    </ContainerGradient>
  </div>
);

export default About;
