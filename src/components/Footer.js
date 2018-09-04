import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, fas } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  font-weight: 500;
  display: inline;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: right;
  vertical-align: baseline;
  word-wrap: break-word;
  margin-bottom: 50px;
`;

const Anchor = styled.a`
  color: black;

  &:hover, active {
    color: #867e7e;
    text-decoration: underline;
  }
`


const Footer = () => (
  <Container>
    <Row className="d-none d-md-block">
      <Col xs="12">
        <Row className="justify-content-around">
          <Col xs="2" className="text-center"><Anchor href="http://localhost:8000"> Home  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="http://localhost:8000/journey"> Jouney  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="http://localhost:8000/projects"> Projects  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="http://localhost:8000/contact"> Contact  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="https://medium.com/@RebyOliveira" target="_blank"> Blog </Anchor></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs="12" className="text-center">
        <FontAwesomeIcon style={{marginTop: '30px'}} className="mx-auto d-inline" icon={faCode} size="1x" color="#61dbfb" />
        <NormalText className="cd-flex justify-content-center pt-4"> with </NormalText>
        <FontAwesomeIcon className="mx-auto d-inline" icon={faHeart} size="1x" color="#61dbfb" />
      </Col>
    </Row>
  </Container>
)


export default Footer;
