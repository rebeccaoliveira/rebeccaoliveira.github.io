import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Clientes from "../images/conheca-nossos-clientes.png";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewsletterDiv = styled.div`
  border: solid 2px #BBDEFB;
  background:rgb(255, 234, 239);
  min-height: 260px;
  width:100%;
`;

const TitleStyle = styled.div`
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 5.5px;
  line-height: 27.2px;
  text-transform: uppercase;
  vertical-align: baseline;

  padding-top: 25px;
  padding-bottom: 25px;
  margin-right: 126px;
  margin-left: 126px;
  width:100%;

`;

const TextStyle = styled.div`
  font-color: rbg (136, 136, 136);
  display: block;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27.2px;
  margin-bottom: 25px;
  margin-top: 25px;
  outline-color: rbg (136, 136, 136);
  text-align: justify;
  vertical-align: baseline;


`;

const InputStyle = styled.input`
  font-color: rbg (136, 136, 136);
  display: block;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 27.2px;
  outline-color: rbg (136, 136, 136);
  text-align: justify;
  vertical-align: baseline;

`;

const ButtonNew = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #555555;
  padding: 16px;
  display: inline-block;
`;


const Newsletter = () => (
  <Row id="newsletter">
    <NewsletterDiv>
      <Col xs="12" className ="col align-self-center">
        <Row className ="row align-items-start">
          <Col xs="3" className ="col align-self-center"/>
          <Col xs= "8" className ="col align-self-center" >
              <Row>
                <TitleStyle className="text-center"> Newsletter </TitleStyle>
              </Row>

              <Row>
                <TextStyle> Receba meus e-mails semanais com novidades quentinhas, cupons exclusivos e amor de sobra. </TextStyle>
              </Row>

              <Row>
                <FormGroup>
                  <Label for="emailnewsletter" hidden> INSIRA SEU E-MAIL AQUI</Label>
                  <InputStyle type="email" name="email" id="emailnewsletter" placeholder="NSIRA SEU E-MAIL AQUI" />
                </FormGroup>
                {' '}
                <ButtonNew> OK </ButtonNew>
              </Row>
          </Col>
          <Col xs="1"/>
        </Row>
      </Col>
    </NewsletterDiv>
  </Row>
)

export default Newsletter
