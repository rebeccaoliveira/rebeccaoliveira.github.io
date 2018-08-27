import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import DesingImage from "../images/image_design.jpeg";
import Olho from "../images/olho.png";
import Fabrica from "../images/fabrica-e-am.png";


const DesignDiv = styled.div`
  border: solid 2px #C5CAE9;
  min-height: 424px;
  padding-top: 63px;
  padding-bottom: 63px;
  width:100%;
`;

const TitleStyle = styled.div`
  color: rgb (0, 0, 0);
  display: block;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 15px;
  line-weight: 27.2px;
  text-transform: uppercase;
`;

const TextStyle = styled.div`
  color: rgb (0, 0, 0);
  font-family: 'ABeeZee',Helvetica,Arial,Lucida,sans-serif
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 27.2px;
  text-align: left;
  text-size-ajust: 100%;
  vertical-align: baseline;
`;

const Button = styled.button`
  padding: 6px 20px 6px 20px;
  color: #ffffff!important;
  border-radius: 25px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase!important;
  background-color: #ff4197
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
`;


const Design = () => (
  <DesignDiv>
    <Row>
      <Col xs="6">
        <img width="597" height="336" src={DesingImage} alt="DesingImage" />
      </Col>

      <Col xs="6">
          <Row>
            <img width="117" height="99" src={Olho} alt="Olho" />
          </Row>
            <TitleStyle>AMANDA MOL EST. DESIGN & CO. </TitleStyle>
          <Row>
            <TextStyle> O depto. criativo de projetos exclusivos para sua marca. </TextStyle>
          </Row>
          <Row>
            <img width="259" height="30" src={Fabrica} alt="Fabrica" />
          </Row>
          <Row>
            <Button> Conhecer </Button>
          </Row>
      </Col>
    </Row>
  </DesignDiv>
)

export default Design
