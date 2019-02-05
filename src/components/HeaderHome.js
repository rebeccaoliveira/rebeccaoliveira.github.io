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




const HeaderHome = (props) => {
  return (
    <div>
    <NavbarSite />
    <Row className="justify-content-center d-xs-block d-lg-none">
      <Col xs="12" md="6" className="text-center">
        <TextTitle> Rebecca Oliveira </TextTitle>
      </Col>
    </Row>
    </div>
  );
};

export default HeaderHome;
