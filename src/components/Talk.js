import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const TextStyle = styled.h1`
  font-family: 'Space Mono', monospace;
  font-size: 30px;
  font-weight: 500;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 30px 0px 30px 0px;
  margin-top: 30px;
`;

const NormalText = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 18px;
  font-weight: 500;
  display: inline;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  margin-bottom: 50px;
`;


const Footer = () => (
  <Container>
    <Row>
      <Col xs="12">
        <TextStyle> Lets talk?! </TextStyle>
      </Col>
    </Row>
    <div>
      <Row className="justify-content-center">
        <Col xs="6" className="text-center">
          <FontAwesomeIcon className="mx-auto d-inline" icon={faGithub} size="2x" color="black"></FontAwesomeIcon>
          <NormalText href="https://github.com/rebyoliveira">rebyoliveira</NormalText>
        </Col>
      </Row>
    </div>
    <div>
      <Row className="justify-content-center" >
        <Col xs="6" className="text-center">
          <FontAwesomeIcon className="mx-auto d-inline" icon={faTwitter} size="2x" color="rgb(89,176,245)"></FontAwesomeIcon>
          <NormalText href="https://twitter.com/rebyoliveira">rebyoliveira</NormalText>
        </Col>
      </Row>
    </div>
  </Container>
)


export default Footer
