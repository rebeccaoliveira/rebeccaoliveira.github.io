import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import HeaderHome from '../components/HeaderHome';
import WhoIs from '../components/WhoIs';
import BoxAbout from '../components/BoxAbout';
import Skills from '../components/Skills';
import ProjectsHome from '../components/ProjectsHome';
import Talk from '../components/Talk';
import Footer from '../components/Footer';


const Index = () => (
  <Container>
    <HeaderHome id="headerhome" />
    <WhoIs id="whois" />
    <BoxAbout id="about" />
    <Skills id="skills" />
    <ProjectsHome id="projectshome" />
    <Talk id="talk" />
    <Footer id="footer" />
  </Container>
);

export default Index;

// const IndexPage = () => (
//   <div>
//     <Header />
//     <Header2 />
//     ola
//     <Block />
//     <Block />
//     <Product>Produto</Product>
//     <Product backgroundColor={'blue'}>Produto 2</Product>
//     <img src={img1_2} />
//   </div>
// )
