import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
// import fontawesome from '@fortawesome/fontawesome'
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare'
import faHTML5 from '@fortawesome/fontawesome-free-brands/faHTML5'
import faCSS3Alt from '@fortawesome/fontawesome-free-brands/faCSS3Alt'
import faNode from '@fortawesome/fontawesome-free-brands/faNode'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faGem from '@fortawesome/fontawesome-free-solid/faGem'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'



const SkillDiv = styled.div`
  min-height: 80px;
  width: 100%;
`;
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
  padding: 30px 0px 50px 0px;
`

const Navbar = styled(ReactNavbar)`
  font-color: rgb(0, 0, 0);
`

  const Skills = () => (
    <div>
      <TextStyle>Skills: Programming Languages & Tools</TextStyle>
      <Row>
        <Col xs="1" />
        <Col xs="10">
          <Row>

            <Col xs="3">
              <FontAwesomeIcon className="mx-auto d-block" icon={faHTML5} size="5x" color="grey" />
            </Col>
            <Col xs="3">
              <FontAwesomeIcon className="mx-auto d-block" icon={faCSS3Alt} size="5x" color="grey" />
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
    </div>
  )

export default Skills;
