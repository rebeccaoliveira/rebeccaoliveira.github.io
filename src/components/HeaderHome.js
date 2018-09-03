import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import logoReact from "../images/logo-react-heart-blue.png";
import NavbarSite from '../components/NavbarSite';


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
    color: black;
    text-decoration: underline;
  }
`


const HeaderHome = (props) => {
  return (
    <Row>

      <Col xs="6" className="col align-self-center">
        <Row className="row justify-content-start">
          <Col xs="3" className="col align-self-center">
            <a href="http://localhost:8000"><img width="70" height="70" src={logoReact} alt="logoReact" className="float-right" /> </a>
          </Col>
          <Col xs="9" className="col align-self-center">
            <TextTitle> Rebecca Oliveira </TextTitle>
            <TextStyle>A (non) Tech Girl on ReactJS</TextStyle>
          </Col>
        </Row>
      </Col>


        <Col xs="6" className="col align-self-center">
          <Row className="row justify-content-end" >
            <NavbarSite />
          </Row>
        </Col>

    </Row>
  );
};

export default HeaderHome;
