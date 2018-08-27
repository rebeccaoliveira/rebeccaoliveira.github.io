import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Depoimentos from "../images/depoimentos.png";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransitionGroup from 'react-transition-group';


const TestimonialStyle = styled.div`
  border: solid 2px #AD1457;
  background: linear-gradient(180deg,#ffffff 0%,#f4f4f4 100%);
  min-height: 350px;
  width: 100%;
`;

const WrapperTestimonialTitle = styled.section`
  min-height: 269px;
  display: block;
  margin-left: 126px;
  margin-right: 126px;
  padding-top: 110px;
  padding-bottom: 110px;
  position: absolute;
`;

const WrapperText = styled.section`
  min-height: 269px;
  display: block;
  margin-left: 126px;
  margin-right: 126px;
  padding-top: 110px;
  padding-bottom: 110px;
  position: inline;
`;


const TestimonialName = styled.div`
  position: absolute;
  display: block;
  font-size: 25px;
  letter-spacing: 5px;
  line-height: 2em
  margin-left: 175px;
  margin-top: 50px;
  text-align: center;
  font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;

`;

const TestimonialText = styled.div`

  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  color: black;
  text-align: center;
  overflow: hidden;
  position: absolute;
  display: block;
  width: 100%;
  font-size: 14px;

`;

const Testimonials = () => (

  <Row>
    <TestimonialStyle id="testimonialstyle">
      <Col xs="1" />
      <Col xs="10" >
        <Row>
          <Col xs="6">
            <WrapperTestimonialTitle>
              <img width="300" height="108" src={Depoimentos} alt="Depoimentos" />
            </WrapperTestimonialTitle>
          </Col>
          <Col xs="6">
            <WrapperText>
              <TestimonialName> <h2> brunamarz </h2> </TestimonialName>
              <TestimonialText> Sou apaixonada pelo trabalho da Amanda! Dá de sentir o quanto de amor ela coloca em cada criação e produto. Dessa vez comprei o porta chaves escrito 'lar' e não vejo a hora de pendurar na minha parede! Muito amor! </TestimonialText>
              <TestimonialName> <h2> brendaricarte </h2> </TestimonialName>
              <TestimonialText> Sou apaixonada pelo trabalho da Amanda! Dá de sentir o quanto de amor ela coloca em cada criação e produto. Dessa vez comprei o porta chaves escrito 'lar' e não vejo a hora de pendurar na minha parede! Muito amor! </TestimonialText>
            </WrapperText>
          </Col>
        </Row>
      </Col>

      <Col xs="1" />
    </TestimonialStyle>
  </Row>
)


export default Testimonials
