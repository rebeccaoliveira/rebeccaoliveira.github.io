import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import gravatarRebecca from "../images/gravatar.jpg";

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid #F5A9A9;
  margin-top: 15px;
`
const NameStyle = styled.h1`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  padding: 0px 0px 0px 0px;
  text-align: center;
`

const TitleStyle = styled.h2`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: rgb(0, 0, 0);
  line-height: 10px;
  padding: 0px 0px 0px 0px;
  text-align: center;
`

const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  color: #867e7e;
  word-wrap: break-word;
  text-align: center;
`
const WhoIs = () =>(
  <div>
    <Container>
      <Row>
        <Col xs="12">
          <Row className="justify-content-center">
            <Col xs="6" sm="4" md="4" lg="3" xl="2" >
              <Image className="mx-auto d-block" src={gravatarRebecca} alt="gravatarRebecca" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" md="8" sm="8" lg="8" xl="12" style={{marginTop: '30px'}}>
              <NameStyle lassName="mx-auto d-block">It&#39;s Me </NameStyle>
              <TitleStyle className="mx-auto d-block" style={{marginTop: '30px'}} > Frontend Developer</TitleStyle>
              <NormalText className="mx-auto d-block"> Learning how to code, every day! </NormalText>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
    <hr style={{backgroundColor: '#F5A9A9'}} />
  </div>
)

export default WhoIs;
