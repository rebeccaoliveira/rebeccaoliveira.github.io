import React from 'react'
import styled from 'styled-components'
import HeaderHome from '../components/HeaderHome';
import { Container, Row, Col } from 'reactstrap';
import WhoIs from '../components/WhoIs';



const Index = () => (
  <Container>
    <HeaderHome id ="header" />
    <WhoIs id="whos" />
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
