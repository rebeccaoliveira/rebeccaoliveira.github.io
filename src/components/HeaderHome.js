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
    <div>
    <NavbarSite />
    <Row className="justify-content-center d-xs-block d-lg-none">
      <Col xs="12" md="6" className="text-center">
        <TextTitle> Rebecca Oliveira </TextTitle>
        <TextStyle>A (non) Tech Girl on ReactJS</TextStyle>
      </Col>
    </Row>
    </div>
  );
};

export default HeaderHome;
