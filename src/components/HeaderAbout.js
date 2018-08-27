import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart.png";

const TextStyle = styled.h1`
  font-family: 'proxima-nova', futura-pt;
  font-weight: 500;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
`;

const HeaderAbout  = () => (
  <Row className="pt-2">
    <Col xs="2">
      <div className="pl-3">
        <img width="94" height="94" src={logoReact} alt="logoReact" />
      </div>
    </Col>
    <Col xs="8" className="d-flex justify-content-center pt-4">
      <TextStyle> When I am not coding...</TextStyle>
    </Col>
  </Row>
);

export default HeaderAbout;
