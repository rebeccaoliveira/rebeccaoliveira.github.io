import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import MyWebsite from "../images/mywebsite.png";
import Xmail from "../images/xmail.png";
import NPM from "../images/npm.png";

const CardMain = styled(Card)`
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
`;

const BodyTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: black;
  font-family: proxima-nova, "futura-pt space";;
`;

const BodySubtitle = styled.div`
  font-size: 14px;
  text-align: center;
  color: black;
  font-family: proxima-nova, "futura-pt space";
`

const TextStyle = styled.h1`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 10px 0px 50px 0px;
`
const Anchor = styled.a`
  color: #F5A9A9;

  &:hover, active {
    color: #F5A9A9
  }

  .faGithub:hover {
      color: red;
  }
`

const ProjectsHome = () => (
  <div>
    <Container>
      <TextStyle>Personal Projects</TextStyle>
        <Row className="justify-content-center">
          <Col xs="12" sm="10" md="8" lg="4" xl="4" className="pb-3 pr-3 pl-3 pb-lg-0">
            <CardMain>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top src={MyWebsite} alt="mywebsite"/>
                <CardBody>
                  <CardTitle> <BodyTitle> My website  </BodyTitle> </CardTitle>
                  <CardSubtitle><BodySubtitle>Built using Gatsby, with Styled Component and Reactstrap. </BodySubtitle></CardSubtitle>
                </CardBody>
              </Anchor>
            </CardMain>
          </Col>
            <Col xs="12" sm="10" md="8" lg="4" xl="4" className="pb-3 pr-3 pl-3 pb-lg-0">
            <CardMain>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top  src={Xmail} alt="xmail"/>
                <CardBody>
                <CardTitle><BodyTitle> Xmail </BodyTitle></CardTitle>
                <CardSubtitle><BodySubtitle> What's the best way to learn React/JSS/Redux? Create a Gmail clone! </BodySubtitle></CardSubtitle>
                </CardBody>
              </Anchor>
            </CardMain>
          </Col>
          <Col xs="12" sm="10" md="8" lg="4" xl="4" className="pb-3 pr-3 pl-3 pb-lg-0">
            <CardMain>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top  src={NPM} alt="npmpackage"/>
                <CardBody>
                <CardTitle><BodyTitle> A package on NPM  </BodyTitle> </CardTitle>
                <CardSubtitle><BodySubtitle> A snippet component package published on NPM, running a test with Travis. </BodySubtitle></CardSubtitle>
                </CardBody>
              </Anchor>
            </CardMain>
          </Col>
        </Row>
    </Container>
    <hr style={{backgroundColor: '#F5A9A9'}} />
  </div>
);

export default ProjectsHome;
