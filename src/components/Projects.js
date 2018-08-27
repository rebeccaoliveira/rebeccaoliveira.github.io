import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
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
  font-family: 'Space Mono', monospace;
`;

const NameStyle = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 30px;
  font-weight: 500;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 30px 0px 30px 0px;
`

const Projects = () => (
  <div>
    <NameStyle>Portfolio: Projects</NameStyle>
    <Row>
      <Col xs="1" />
      <Col xs="10">

        <Row>

          <Col xs="4">
            <ProjectPost>
              <div>
                <Card>
                  <CardImg top width="100%" src={NyanCat} alt="NyanCat"/>
                  <CardBody>
                    <CardTitle> <BodyTitle> Project #01 </BodyTitle> </CardTitle>
                    <CardSubtitle> <BodyTitle> Nyan Cat </BodyTitle> </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </ProjectPost>
          </Col>

          <Col xs="4">
            <ProjectPost>
              <div>
                <Card>
                  <CardImg top width="100%" src={NyanCatMexico} alt="NyanCatMexico"/>
                  <CardBody>
                  <CardTitle> <BodyTitle> Project #02 </BodyTitle> </CardTitle>
                  <CardSubtitle> <BodyTitle> Nyan Cat Mexico </BodyTitle> </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </ProjectPost>
          </Col>

            <Col xs="4">
              <ProjectPost>
                <div>
                  <Card>
                    <CardImg top width="100%" src={NyanCatNinja} alt="NyanCatNinja"/>
                    <CardBody>
                    <CardTitle> <BodyTitle> Project #03 </BodyTitle> </CardTitle>
                    <CardSubtitle> <BodyTitle> Nyan Cat Ninja </BodyTitle> </CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
              </ProjectPost>
            </Col>
        </Row>
      </Col>
      <Col xs="1" />
    </Row>
  </div>
)


export default Projects;
