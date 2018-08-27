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
  vertical-align: baseline
  word-wrap: break-word;
  padding: 30px 0px 50px 0px;
  margin-top: 30px;
  `;

  const NormalText = styled.p`
    font-family: 'Space Mono', monospace;
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
      a:hover {
      color: red;
    }
      a:link {
      color: green;
    }
      a:visited {
      color: green;
    }
  `;


const Footer = () => (
  <Container>
    <Row>
      <Col xs={{ size: 2, offset: 5 }} className="text-center">
        <FontAwesomeIcon style={{marginTop: '30px'}} className="mx-auto d-inline" icon={faCode} size="1x" color="rgb(89,176,245)" />
        <NormalText className="cd-flex justify-content-center pt-4"> with </NormalText>
        <FontAwesomeIcon className="mx-auto d-inline" icon={faHeart} size="1x" color="rgb(233, 30, 99)" />
      </Col>
    </Row>
    <Row>
      <Col xs={{ size: 8, offset: 2 }}>
        <Row className="justify-content-around">
          <Col xs="2" className="text-center"><Anchor href="#"> Home </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> About </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> Projects </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> Contact </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="https://medium.com/@RebyOliveira"> Blog </Anchor></Col>
        </Row>
      </Col>
      <Col xs="2"/>
    </Row>
  </Container>
)


export default Footer
