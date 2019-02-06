import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, fas } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium'


const TitleText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 30px 0px 0px 0px;
`

const InfoStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  display: block;
  color: #867e7e;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 10px 0px 30px 0px;
`


const Anchor = styled.a`
  color: #867e7e;

  &:hover, active {
    color: black;
  }
`
const TalkDiv = styled.div`
  padding: 0px 0px 0px 0px;
`
const FontIcon = styled(FontAwesomeIcon)`
  color: #867e7e;

  &:hover {
    color: #F5A9A9;
  }
`

const ContactPage = () => (
  <TalkDiv>
    <Container>
      <TitleText>Please, contact me! 📨 </TitleText>
      <div className="d-flex justify-content-around">
        <Row>
          <Col>
            <Row>
              <Col xs="12">
                <InfoStyle> Email: rebecca.d.oliveira@gmail.com</InfoStyle>
              </Col>
            </Row>
            <Row>

              <Col xs="12">
                <Row>
                  <Col xs="3">
                    <Anchor href="mailto:rebecca.d.oliveira@gmail.com" target="_blank">
                      <FontIcon className="mx-auto d-inline" icon={faEnvelope} size="2x" color="grey" />
                    </Anchor>
                  </Col>
                  <Col xs="3">
                    <Anchor href="https://github.com/rebyoliveira" target="_blank">
                      <FontIcon className="mx-auto d-inline" icon={faGithub} size="2x" color="grey" />
                    </Anchor>
                  </Col>
                  <Col xs="3">
                    <Anchor href="https://twitter.com/rebyoliveira" target="_blank">
                      <FontIcon className="mx-auto d-inline" icon={faTwitter} size="2x" color="grey" />
                    </Anchor>
                  </Col>
                  <Col xs="3">
                    <Anchor href="https://medium.com/@RebyOliveira" target="_blank">
                      <FontIcon className="mx-auto d-inline" icon={faMedium} size="2x" color="grey" />
                    </Anchor>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
    <hr />
  </TalkDiv>
);


export default ContactPage;
