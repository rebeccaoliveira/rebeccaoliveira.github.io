import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Clientes from "../images/conheca-nossos-clientes.png";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const ClientsStyle = styled.div`
  border: solid 2px #ffcdd2;
  background: linear-gradient(180deg,#ffffff 0%,#d6fffb 100%);
  min-height: 594px;
  width:100%;
  padding: 80px 90px 0px 250px;
`;

const PinkButton = styled.button`
  padding: 6px 14px 6px 14px;
  color: #ffffff!important;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase!important;
  background-color: #ff4197
  font-family: Open Sans Condensed,Helvetica,Arial,Lucida,sans-serif;
`;

const TitleStyle = styled.div`
  text-transform: uppercase;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  line-height: 26.4px;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;
  font-color: #000;
`;

const TextStyle = styled.div`
  font-family: "Open Sans Condensed",Helvetica,Arial,Lucida,sans-serif;
  font-size: 18px;
  font-weight: 500;
  display: Block;
  font-color: rgb(0, 0, 0);
  line-height: 27.2 px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
;

`;

const Clients = () => (
  <Row id="clients">
    <ClientsStyle>
      <Col xs="12">
        <Row>
          <Col xs="1"/>
          <Col xs="10">
            <Row>
              <Col xs="12">
                <img src={Clientes} alt="Clientes" />
              </Col>
            </Row>
            <Row>
              <Row>
                <br />
                <h3><TitleStyle> Quer participar desta seção lá no blog? : ) </TitleStyle> </h3>
                <br/>
                <p><TextStyle> Preencha este mini-formulário abaixo e a Lu (assessora querida) entrará em contato! </TextStyle></p>
              </Row>
              <Row>
                <Form inline>
                  <FormGroup>
                    <Label for="exampleNome" hidden><TextStyle> Nome </TextStyle></Label>
                    <Input type="nome" name="nome" id="exampleNome" placeholder="Nome" />
                  </FormGroup>
                  {' '}
                  <FormGroup>
                    <Label for="exampleEmail" hidden><TextStyle> Email </TextStyle></Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                  </FormGroup>
                  {' '}
                  <PinkButton>OK</PinkButton>
                </Form>
              </Row>
            </Row>
          </Col>
          <Col xs="1"/>
        </Row>
      </Col>
    </ClientsStyle>
  </Row>
)


export default Clients
