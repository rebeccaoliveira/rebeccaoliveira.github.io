import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logoReact from "../images/logo-react-heart-blue.png";


const TextTitle = styled.h1`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  color: rgb(0, 0, 0);
  line-height: 2 px;
  display: inline;
`;
const TextStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: #867e7e;
  display: block;
`
const MenuStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  color: #867e7e;
  display: inline;
  text-align: center;
`
const Anchor = styled.a`
  color: #867e7e;

  &:hover, active {
    color: rgb(0, 0, 0);
    text-decoration: underline;
  }
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
          <Col xs="2" className="text-center" />
          <Col xs="2" className="text-center">
            <MenuStyle> <Anchor href="#">Home</Anchor></MenuStyle>
          </Col>
          <Col xs="2" className="text-center">
            <MenuStyle> <Anchor href="#">About</Anchor></MenuStyle>
          </Col>
          <Col xs="2" className="text-center">
            <MenuStyle> <Anchor href="#">Projects</Anchor></MenuStyle>
          </Col>
          <Col xs="2" className="text-center">
            <MenuStyle> <Anchor href="#">My Blog</Anchor></MenuStyle>
          </Col>
          <Col xs="2" className="text-center" />
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderHome;
