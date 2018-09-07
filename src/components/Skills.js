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
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
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
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faHtml5} size="5x" color="grey"onClick={this.toggle1}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                  <NormalText toggle={this.toggle1}>HTML</NormalText>
                  <ModalBody>
                      Level: Advanced
                      <p>As a simple Hyper Text Markup Language was funny and smooth my learning. </p>
                      <ul>
                        <li> To create a structure of web pages efficiently using markup. </li>
                        <li> I have a complete understanding of tags, elements, attributes, etc.</li>
                      </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle1}>Close</Button>
                  </ModalFooter>
                </Modal>

            </Col>

            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faCss3Alt} size="5x" color="grey"onClick={this.toggle2}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                  <ModalHeader toggle={this.toggle2}>CSS</ModalHeader>
                  <ModalBody>
                      Level: Advanced
                      <p>During a time I felt some difficulties to understand how CSS works, but now is very clear. </p>
                      <ul>
                        <li> To create a CSS file with styles to use in an HTML page. </li>
                        <li> To use Bootstrap in projects. </li>
                        <li> I&#39;ve been practicing a lot how to use CSS through Styled Components.  💅 </li>
                      </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle2}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faJsSquare} size="5x" color="grey" onClick={this.toggle3}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                  <ModalHeader toggle={this.toggle3}>Java Script</ModalHeader>
                  <ModalBody>
                      Level: Medium - in training
                      <p> The vital part of frontend developer, I&#39;ve been studying this language continuously.  </p>
                      <ul>
                        <li> My practice with JS is using through React. </li>
                        <li> Appling ES6 by Styled Components. </li>
                      </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle3}>Close</Button>
                  </ModalFooter>
                </Modal>
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
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faReact} size="5x" color="grey"onClick={this.toggle4}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
                  <ModalHeader toggle={this.toggle4}>React</ModalHeader>
                  <ModalBody>
                      Level: Medium - in training
                      <p>I spend most of my time focus on to learn React, using components with JSX.</p>
                      <ul>
                        <li> Understanding the structure of React, with Components, Class, Function. </li>
                        <li> I feel entirely comfortable with Styled Components and React elements.</li>
                        <li> To build things using Reactstrap, Material UI or another library.</li>
                      </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle4}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block p-2 " icon={faNpm} size="5x" color="grey"onClick={this.toggle5}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
                  <ModalHeader toggle={this.toggle6}>NPM</ModalHeader>
                  <ModalBody>
                      Level: Medium - in training
                      <p>I know how to use and how to publish a package on NPM.</p>
                      <ul>
                        <li> To Publish one package on NPM. </li>
                        <li> Add build on Travis to publish a package.</li>
                        <li> To use the terminal to test, publish or install packages.</li>
                      </ul>
                      <p>Obs.: Sometimes I use Yarn, with no difficulties. </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle5}>Close</Button>
                  </ModalFooter>
                </Modal>
            </Col>

            <Col xs="4" sm="4" md="4" lg="4" xl="4">
              <Anchor href="#">
                <FontIcon className="mx-auto d-block" icon={faGithub} size="5x" color="grey"onClick={this.toggle6}>{this.props.buttonLabel}</FontIcon>
              </Anchor>
                <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}>
                  <ModalHeader toggle={this.toggle6}>Github</ModalHeader>
                  <ModalBody>
                    Level: Advanced
                    <p>I used Github for a long time before to study develop, as a project manager. Now I use as a developer.</p>
                    <ul>
                      <li> Using the terminal to init a new repository, and create a process saving my codes with commit and git push. </li>
                      <li> Add test in my code using Travis.</li>
                      <li> To organize projects and documentation.</li>
                    </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle6}>Close</Button>
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
