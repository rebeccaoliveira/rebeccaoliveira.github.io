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
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode'
import { faGit } from '@fortawesome/free-brands-svg-icons/faGit'
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
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  toggle3() {
    this.setState({
      modal3: !this.state.modal3
    });
  }

  toggle4() {
    this.setState({
      modal4: !this.state.modal4
    });
  }

  toggle5() {
    this.setState({
      modal5: !this.state.modal5
    });
  }

  toggle6() {
    this.setState({
      modal6: !this.state.modal6
    });
  }

  toggle7() {
    this.setState({
      modal7: !this.state.modal7
    });
  }

  toggle8() {
    this.setState({
      modal8: !this.state.modal8
    });
  }


  render() {
    return (
  <div>
    <StyledJumbotron fluid>
      <Container>
      <TextStyle id="tools">Programming Languages & Tools</TextStyle>
      <Row className="justify-content-center">
        <Col xs="12" md="8" sm="12" lg="10" xl="10">
          <Row>
            <Col xs="6" sm="6" md="3" lg="3" xl="3" className="pb-5 pb-lg-0">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faHtml5} size="5x" color="grey"onClick={this.toggle1}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                  <NormalText toggle={this.toggle1}>HTML</NormalText>
                  <ModalBody>
                    <p>
                      Level: Advanced
                      <p>As a simple Hyper Text Markup Language, was funny and smooth my learning </p>
                      <ul>
                        <li> To create easily a structure of web pages using markup. </li>
                        <li> Completly understanding about tags, elements, attributes, etc.</li>
                      </ul>
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle1}>Close</Button>
                  </ModalFooter>
                </Modal>

            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faCss3Alt} size="5x" color="grey"onClick={this.toggle2}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                  <ModalHeader toggle={this.toggle2}>CSS</ModalHeader>
                  <ModalBody>
                    <p>
                      Level: Advanced
                      <p>During a time I felt some difficulties to understand how CSS works, but now is very clear </p>
                      <ul>
                        <li> To create a CSS file with styles to use in a HTML page. </li>
                        <li> To use Bootstrap in projects. </li>
                        <li> I pratice a lot how to use CSS through Styled Components. 💅 </li>
                      </ul>
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle2}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faJsSquare} size="5x" color="grey" onClick={this.toggle3}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                  <ModalHeader toggle={this.toggle3}>Java Script</ModalHeader>
                  <ModalBody>
                    <p>
                      Level: Medium - in training
                      <p>I studied things about JS as funtions, arrays and algorithm, but I am still building my knowledge </p>
                      <ul>
                        <li> All knowledge that I aquire until here was praticing through React. </li>
                        <li> Using ES6 by Styled Components. </li>
                      </ul>
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle3}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faReact} size="5x" color="grey"onClick={this.toggle4}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
                  <ModalHeader toggle={this.toggle4}>React</ModalHeader>
                  <ModalBody>
                    <p>
                      Level: Medium - in training
                      <p>I spend most of my time focus on to learn React</p>
                      <ul>
                        <li> Understanding the structure of React, with Components, Class, Funtions. </li>
                        <li> I feel completly confortable with Styled Components - My website was build using this library. </li>
                        <li> To build things using Reactstrap, Material UI or another package.</li>
                      </ul>
                      <p>Obs.: I had some difficulties to create something from zero, but I understand the structureand I know to reuse some ready component. </p>
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle4}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>
          </Row>
        </Col>
      </Row>
      <DivIcon/>
      <Row className="justify-content-center">
        <Col xs="1" />
        <Col s="12" md="8" sm="12" lg="10" xl="10">
          <Row>

            <Col xs="6" sm="6" md="3" lg="3" xl="3" className="pb-5 pb-lg-0">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block p-2" icon={faNode} size="5x" color="grey"onClick={this.toggle5}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
                  <ModalHeader toggle={this.toggle5}>Node JS</ModalHeader>
                  <ModalBody>
                  <p>
                    Level: Basic - in training
                    <p>I use this package in my training projects and I have a few idea how it works, but I am a begginner with Node JS  </p>
                    <ul>
                      <li>   </li>
                    </ul>
                  </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle5}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block p-2 " icon={faNpm} size="5x" color="grey"onClick={this.toggle6}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}>
                  <ModalHeader toggle={this.toggle6}>NPM</ModalHeader>
                  <ModalBody>
                    <p>
                      Level: Medium - in training
                      <p>I know how to use and how to publish a package on NPM.</p>
                      <ul>
                        <li> Published one package on NPM. </li>
                        <li> Create all way to publish a package, using terminal. </li>
                        <li> Install package through terminal.</li>
                      </ul>
                      <p>Obs.: Sometimes I use Yarn, wiht no difficulties. </p>
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle6}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faGit} size="5x" color="grey"onClick={this.toggle7}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal7} toggle={this.toggle7} className={this.props.className}>
                  <ModalHeader toggle={this.toggle7}>Git</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle7}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="6" sm="6" md="3" lg="3" xl="3">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faGithub} size="5x" color="grey"onClick={this.toggle8}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal8} toggle={this.toggle8} className={this.props.className}>
                  <ModalHeader toggle={this.toggle8}>Github</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle8}>Close</Button>
                  </ModalFooter>
                </Modal>
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
