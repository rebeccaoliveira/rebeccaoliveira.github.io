import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Button, Modal,
  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const TextStyle = styled.h1`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 0px 0px 50px 0px;
`

const DivIcon = styled.div`
  padding: 20px 0px 50px 0px;
`

const Anchor = styled.a`
  color: #867e7e;
  }
`
const NormalText = styled(ModalHeader)`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: justify;
`
const StyledJumbotron = styled(Jumbotron)`
  background-color: white;
`
const FontIcon = styled(FontAwesomeIcon)`
  color: #867e7e;

  &:hover {
    color: black;
  }
`

class Skills extends React.Component {
  render() {
    return (
  <div>
    <StyledJumbotron fluid>
      <Container>
      <TextStyle id="tools">Programming Languages & Tools</TextStyle>
      <Row className="justify-content-center">
        <Col xs="12" md="8" sm="12" lg="10" xl="10">
          <Row>
            <Col xs="4" sm="4" md="4" lg="4" xl="4" className="pb-5 pb-lg-0">
              <FontIcon className="mx-auto d-block" icon={faHtml5} size="5x" color="grey"onClick={this.toggle1}>{this.props.buttonLabel}</FontIcon>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <FontIcon className="mx-auto d-block" icon={faCss3Alt} size="5x" color="grey"onClick={this.toggle2}>{this.props.buttonLabel}</FontIcon>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <FontIcon className="mx-auto d-block" icon={faJsSquare} size="5x" color="grey" onClick={this.toggle3}>{this.props.buttonLabel}</FontIcon>
            </Col>
          </Row>
        </Col>
      </Row>
      <DivIcon/>
      <Row className="justify-content-center">
        <Col xs="1" />
        <Col xs="12" md="8" sm="12" lg="10" xl="10">
          <Row>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <FontIcon className="mx-auto d-block" icon={faReact} size="5x" color="grey"onClick={this.toggle4}>{this.props.buttonLabel}</FontIcon>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <FontIcon className="mx-auto d-block p-2 " icon={faNpm} size="5x" color="grey"onClick={this.toggle5}>{this.props.buttonLabel}</FontIcon>
            </Col>
            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <FontIcon className="mx-auto d-block" icon={faGithub} size="5x" color="grey"onClick={this.toggle6}>{this.props.buttonLabel}</FontIcon>
            </Col>
          </Row>
        </Col>
        <Col xs="1" />
      </Row>
    </Container>
  </StyledJumbotron>
  <hr />
</div>
    );
  }
}

export default Skills;
