import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logoReact from "../images/logo-react-heart-blue.png";


const TextTitle = styled.h1`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 35px;
  color: rgb(0, 0, 0);
  line-height: 2 px;
  display: inline;
`;
const TextStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: #adadad;
  display: block;
`
const MenuStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: #adadad;
  display: inline;
`


const HeaderHome = (props) => {
  return (
    <Row>
      <Col xs="6">
        <Row>
          <Col xs="2">
            <img width="70" height="70" src={logoReact} alt="logoReact" />
          </Col>
          <Col xs="10">
            <TextTitle> Rebecca Oliveira </TextTitle>
            <TextStyle>A (non) Tech Girl on ReactJS</TextStyle>
          </Col>
        </Row>
      </Col>

      <Col xs="6">
        <Row>
          <Col xs="12">
            <MenuStyle><a href="#">Home</a></MenuStyle>
            <MenuStyle><a href="#">Home</a></MenuStyle>
            <MenuStyle><a href="#">Home</a></MenuStyle>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderHome;
