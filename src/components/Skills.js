import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode'
import { faGit } from '@fortawesome/free-brands-svg-icons/faGit'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const TextStyle = styled.h1`
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
const DivIcon = styled.div`
  padding: 5px 0px 50px 0px;
`


  const Skills = () => (
    <div>
      <Container>
        <TextStyle>Skills: Programming Languages & Tools</TextStyle>
        <Row>
          <Col xs="1" />
          <Col xs="10">
            <Row>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faHtml5} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faCss3Alt} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faJsSquare} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faReact} size="5x" color="grey" />
              </Col>
            </Row>
          </Col>
          <Col xs="1" />
        </Row>
        <DivIcon/>
        <Row>
          <Col xs="1" />
          <Col xs="10">
            <Row>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faNode} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faNpm} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faGit} size="5x" color="grey" />
              </Col>
              <Col xs="3">
                <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="5x" color="grey" />
              </Col>
            </Row>
          </Col>
          <Col xs="1" />
        </Row>
      </Container>
      <hr />
    </div>
  )

export default Skills;
