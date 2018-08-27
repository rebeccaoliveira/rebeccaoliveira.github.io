import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import logoReact from "../images/logo-react-heart.png";
import HeaderAbout from '../components/headerabout';
import gravatarRebecca from "../images/gravatar.jpg";
import diamante from "../images/diamante.jpg";
import yogaflow from "../images/yogaflow.jpg";
import travel from "../images/travel.jpg";
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const TextFont = styled.p`
  font-family: 'proxima-nova', futura-pt;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 50%;
  display: block;
  width: 50%;
`;

const Boxdiv = styled.div`
  margin-top: 200 px;

`;

const BoxAbout = () => (
  <Container>
    <div>
      <Row className="align-items-center">
        <Col xs="4">
          <Image className="mx-auto d-block" src={yogaflow} alt="yogaflow"/>
        </Col>
        <Col xs="8">
          <Row>
            <TextFont> I love Yoga. Here I found my place. For me, its a way to keep my mind calm and relax, controlling my anxiety, while I am exercising my body! </TextFont>
          </Row>
        </Col>
      </Row>
    </div>
    <div>
      <Row className="align-items-center">
        <Col xs="col-12 col-sm-6 col-md-8">
          <TextFont> I am a dog lover! I always want to take home every dog that I see on the streets (rsrsr). This is Diamond (Diamante in Portuguese), my lovely pet! </TextFont>
        </Col>
        <Col xs="col-6 col-md-4">
          <Image className="mx-auto d-block" src={diamante} alt="diamante"/>
        </Col>
      </Row>
    </div>
    <div>
    <Row className="align-items-center">
      <Col xs="col-6 col-md-4">
        <Image className="mx-auto d-block" src={gravatarRebecca} alt="gravatarRebecca"/>
      </Col>
      <Col xs="col-12 col-sm-6 col-md-8">
        <TextFont> To cook, and more than this, to eat, is one of my favorite hobbies. Because of this, I created Uau Kitchen, with the idea to share things about food.</TextFont>
      </Col>
    </Row>
    </div>
    <div>
    <Row className="align-items-center">
      <Col xs="col-12 col-sm-6 col-md-8">
        <TextFont> I believe in a borderless world. Travel is my passion because I really like to meet new people and cultures different from mine. This sharing of knowledge for me is a treasure. </TextFont>
      </Col>
      <Col xs="col-6 col-md-4">
        <Image className="mx-auto d-block" src={travel} alt="travel"/>
      </Col>
    </Row>
    </div>
    <Boxdiv>
      <Row className="align-items-center margin-top 20px">
        <Col xs="12">
          <TextFont> But, if you want to know more about my code side, stay connected with me on GitHub, Twitter and my personal Blog!</TextFont>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="3" className="text-center"/>
        <Col xs="3" className="text-center">
          <FontAwesomeIcon className="mx-auto d-inline" icon={faGithub} size="2x" color="black"></FontAwesomeIcon>
          <TextFont href="https://github.com/rebyoliveira">rebyoliveira</TextFont>
        </Col>
        <Col xs="3" className="text-center">
          <FontAwesomeIcon className="mx-auto d-inline" icon={faTwitter} size="2x" color="rgb(89,176,245)"></FontAwesomeIcon>
          <TextFont href="https://twitter.com/rebyoliveira">rebyoliveira</TextFont>
        </Col>
        <Col xs="3" className="text-center"/>
      </Row>
    </Boxdiv>
  </Container>
);

export default BoxAbout;
