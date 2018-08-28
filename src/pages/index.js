import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';

import HeaderHome from '../components/HeaderHome';
import WhoIs from '../components/WhoIs';
import BoxAbout from '../components/BoxAbout';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Talk from '../components/Talk';


const Index = () => (
  <Container>
    <HeaderHome id ="header" />
    <WhoIs id="whois" />
    <BoxAbout id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Talk id="talk" />
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