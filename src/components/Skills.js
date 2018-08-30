import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
const Anchor = styled.a`
  color: #867e7e;

  &:hover, active {
    color: black;
  }
`
const NormalText = styled(ModalHeader)`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  display: block;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: justify;
  vertical-align: baseline;
  word-wrap: break-word;
`

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
  <div>
    <Container>
      <TextStyle id="tools">Programming Languages & Tools</TextStyle>
      <Row>
        <Col xs="1" />
        <Col xs="10">
          <Row>
            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faHtml5} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <NormalText toggle={this.toggle}>HTML</NormalText>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faCss3Alt} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>CSS</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faJsSquare} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Java Script</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faReact} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>React</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
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
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faNode} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Node JS</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faNpm} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>NPM</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faGit} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Git</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="3">
              <Anchor href="#">
                <FontAwesomeIcon className="mx-auto d-block" icon={faGithub} size="5x" color="grey"onClick={this.toggle}>{this.props.buttonLabel}</FontAwesomeIcon>
              </Anchor>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Github</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

          </Row>
        </Col>
        <Col xs="1" />
      </Row>
    </Container>
    <hr />
  </div>
    );
  }
}

export default Skills;
