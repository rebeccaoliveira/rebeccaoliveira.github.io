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


const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 70px 0px 30px 0px;
`

const Anchor = styled.a`
  color: #867e7e;

  &:hover, active {
    color: black;
  }
`

const Talk = () => (
  <div>
    <Container>
      <NormalText>Let&#39;s Talk?! Stay connected with me!</NormalText>
      <div className="d-flex justify-content-around">
        <Row>
          <Col xs="12">
            <Row>
              <Col xs="3">
                <Anchor href="mailto:rebecca.d.oliveira@gmail.com" target="_blank">
                  <FontAwesomeIcon className="mx-auto d-inline" icon={faEnvelope} size="3x" color="grey" />
                </Anchor>
              </Col>
              <Col xs="3">
                <Anchor href="https://github.com/rebyoliveira" target="_blank">
                  <FontAwesomeIcon className="mx-auto d-inline" icon={faGithub} size="3x" color="grey" />
                </Anchor>
              </Col>
              <Col xs="3">
                <Anchor href="https://twitter.com/rebyoliveira" target="_blank">
                  <FontAwesomeIcon className="mx-auto d-inline" icon={faTwitter} size="3x" color="grey" />
                </Anchor>
              </Col>
              <Col xs="3">
                <Anchor href="https://medium.com/@RebyOliveira" target="_blank">
                  <FontAwesomeIcon className="mx-auto d-inline" icon={faMedium} size="3x" color="grey" />
                </Anchor>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
    <hr />
  </div>
);


export default Talk;
