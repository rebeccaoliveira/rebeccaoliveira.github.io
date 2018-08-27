import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import gravatarRebecca from "../images/gravatar.jpg";
import Instagram from "../images/instagram-logo.png";
import Twitter from "../images/twitter-logo-button.png";
import Github from "../images/github-logo.png";

const FirstDiv = styled.div`
  min-height: 400px;
  width:100%;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid #867e7e;
  display: block;
  width: 50%;
`
const NameStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 25px;
  font-weight: 500;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 0px 0px 0px 0px;
`

const TitleStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  font-weight: 500;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 0px 0px 0px 0px;
`

const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  font-weight: 500;
  display: block;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
`
const Icon = styled.i`
  padding-top: 20px;
  margin: 15px;
`
const WhoIs = () =>(
  <FirstDiv>
    <Container>
      <Row>
        <Col xs="12">
          <Row>
            <Col xs="4"/>
            <Col xs="4">
              <Image className="mx-auto d-block" src={gravatarRebecca} alt="gravatarRebecca" />
            </Col>
            <Col xs="4"/>
          </Row>
          <Row>
            <Col xs="4"/>
            <Col xs="4" style={{marginTop: '30px'}}>
              <NameStyle>It&#39;s Me 🌟 </NameStyle>
              <TitleStyle style={{marginTop: '30px'}} >Frontend Developer</TitleStyle>
              <NormalText> Learning how to code, every day! </NormalText>
            </Col>
            <Col xs="4"/>
          </Row>
        </Col>
      </Row>
    </Container>
  </FirstDiv>
)

export default WhoIs;
