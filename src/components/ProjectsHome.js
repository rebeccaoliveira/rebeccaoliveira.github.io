import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import NyanCat from "../images/nyan-cat.jpg";
import NyanCatMexico from "../images/nyan-cat-mexico.jpg";
import NyanCatNinja from "../images/nyan-cat-ninja.jpg";


const BodyTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase
  font-weight: 700;
  text-align: center;
  color: black;
  font-family: 'proxima-nova', 'futura-pt space';
`;

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
            <Card>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top src={NyanCat} alt="NyanCat"/>
                <CardBody>
                  <CardTitle> <BodyTitle> Project #01 </BodyTitle> </CardTitle>
                  <CardSubtitle> <BodyTitle>Nyan Cat </BodyTitle> </CardSubtitle>
                </CardBody>
              </Anchor>
            </Card>
          </Col>
            <Col xs="12" sm="10" md="8" lg="4" xl="4" className="pb-3 pr-3 pl-3 pb-lg-0">
            <Card>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top  src={NyanCatMexico} alt="NyanCatMexico"/>
                <CardBody>
                <CardTitle> <BodyTitle> Project #02 </BodyTitle> </CardTitle>
                <CardSubtitle> <BodyTitle> Nyan Cat Mexico </BodyTitle> </CardSubtitle>
                </CardBody>
              </Anchor>
            </Card>
          </Col>
          <Col xs="12" sm="10" md="8" lg="4" xl="4" className="pb-3 pr-3 pl-3 pb-lg-0">
            <Card>
              <Anchor href="http://localhost:8000/projects" target="_blank">
                <CardImg top  src={NyanCatNinja} alt="NyanCatNinja"/>
                <CardBody>
                <CardTitle> <BodyTitle> Project #03 </BodyTitle> </CardTitle>
                <CardSubtitle> <BodyTitle> Nyan Cat Ninja </BodyTitle> </CardSubtitle>
                </CardBody>
              </Anchor>
            </Card>
          </Col>
        </Row>
    </Container>
    <hr style={{backgroundColor: '#F5A9A9'}} />
  </div>
);

export default ProjectsHome;
