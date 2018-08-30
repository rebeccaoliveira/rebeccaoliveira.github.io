import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import NyanCat from "../images/nyan-cat.jpg";
import NyanCatMexico from "../images/nyan-cat-mexico.jpg";
import NyanCatNinja from "../images/nyan-cat-ninja.jpg";


const ProjectPost = styled.div`
  min-height: 350px;
  width:100%;
`;

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
  padding: 0px 0px 50px 0px;
`
const Anchor = styled.a`
  color: black;

  &:hover, active {
    color: #867e7e;
  }
`
const StyledJumbotron = styled(Jumbotron)`
  background-color: #c0c0c01a;
`

const ProjectsHome = () => (
  <div>
    <StyledJumbotron fluid>
      <Container>
        <TextStyle>Personal Projects</TextStyle>
        <Row>
          <Col xs="1" />
          <Col xs="10">
            <Row>
              <Col xs="4">
                <ProjectPost>
                  <div>
                    <Card>
                      <Anchor href="http://localhost:8000/projects">
                        <CardImg top width="100%" src={NyanCat} alt="NyanCat"/>
                        <CardBody>
                          <CardTitle> <BodyTitle> Project #01 </BodyTitle> </CardTitle>
                          <CardSubtitle> <BodyTitle>Nyan Cat </BodyTitle> </CardSubtitle>
                        </CardBody>
                      </Anchor>
                    </Card>
                  </div>
                </ProjectPost>
              </Col>
              <Col xs="4">
                <ProjectPost>
                  <div>
                    <Card>
                      <Anchor href="http://localhost:8000/projects">
                        <CardImg top width="100%" src={NyanCatMexico} alt="NyanCatMexico"/>
                        <CardBody>
                        <CardTitle> <BodyTitle> Project #02 </BodyTitle> </CardTitle>
                        <CardSubtitle> <BodyTitle> Nyan Cat Mexico </BodyTitle> </CardSubtitle>
                        </CardBody>
                      </Anchor>
                    </Card>
                  </div>
                </ProjectPost>
              </Col>
                <Col xs="4">
                  <ProjectPost>
                    <div>
                      <Card>
                        <Anchor href="http://localhost:8000/projects">
                          <CardImg top width="100%" src={NyanCatNinja} alt="NyanCatNinja"/>
                          <CardBody>
                          <CardTitle> <BodyTitle> Project #03 </BodyTitle> </CardTitle>
                          <CardSubtitle> <BodyTitle> Nyan Cat Ninja </BodyTitle> </CardSubtitle>
                          </CardBody>
                        </Anchor>
                      </Card>
                    </div>
                  </ProjectPost>
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


export default ProjectsHome;
