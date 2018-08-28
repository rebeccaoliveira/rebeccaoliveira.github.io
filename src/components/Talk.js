import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, fas } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'


const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 70px 0px 50px 0px;
`

const Anchor = styled.a`
  color: #867e7e;

  &:hover, active {
    color: black;
    text-decoration: underline;
  }
`


const Talk = () => (
  <div>
    <Container>
      <NormalText>Skills: Programming Languages & Tools</NormalText>
      <Row>
        <Col xs="12">
          <Nav>
            <Anchor href="#">
              <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="3x" color="grey" />
            </Anchor>
            <Anchor href="#">
              <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="3x" color="grey" />
            </Anchor>
            <Anchor href="#">
              <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="3x" color="grey" />
            </Anchor>
            <Anchor href="#">
              <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="3x" color="grey" />
            </Anchor>
          </Nav>
        </Col>
        <Col xs="1" />
      </Row>
    </Container>
    <hr />
  </div>
);


export default Talk;
