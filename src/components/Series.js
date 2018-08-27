import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import SerieImage from "../images/series.png";


const Serie = styled.div`
  border: solid 2px red;
  min-height: 706px;
  background: rgb(51, 51, 51);
  opacity: 0.8
  width:100%;
`;

const Serie1 = styled.div`
  border: solid 2px orange;
  background: rgb(51, 51, 51);
  min-height: 616px;
  float: left;
  width:100%;
  display: inline
`;

const Serie2 = styled.div`
  border: solid 2px black;
  background: rgb(51, 51, 51);
  min-height: 616px;
  display: inline-block;
  width:100%;
`;

const TextSerie = styled.div`
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  font-weight: 700px;
  vertical-align: baseline;
  color: white;
  letter-spacing: 2px;
  padding-top: 18px;
  text-align: left;
`;

const TextBody = styled.div`
font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
vertical-align: baseline;
color: white;
letter-spacing: 2px;
padding-top: 10px;
text-align: left;

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

const WrapperSerie = styled.section`
  min-height: 269px;
  display: block;
  align: center;
  margin-top: 105px;
  position: absolute;
  top: 30px;
  right: 50%;
  width: 200px;
`;

const WrapperSlides = styled.section`
  align: center;
  margin-top: 80px;
  position: absolute;
  top: 30px;
  right: 50%;
  width: 200px;
`;

const Series = () => (
    <Row>
      <Col xs="12">
        <Serie>
          <Row>
            <Col xs="8" className="align-self-center">
                <Row className="justify-content-center">
                    <Row>
                      <Col xs="12">
                        <iframe width="386" height="217" src="https://www.youtube.com/embed/04GCv8btKFM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3"><iframe width="118" height="89" src="https://www.youtube.com/embed/lwCQb9824jo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </Col>
                      <Col xs="3"><iframe width="118" height="89" src="https://www.youtube.com/embed/4Y3i48F2PUI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </Col>
                      <Col xs="3"><iframe width="118" height="89" src="https://www.youtube.com/embed/h76Pk1zfl9A?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </Col>
                      <Col xs="3"><iframe width="118" height="89" src="https://www.youtube.com/embed/04GCv8btKFM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </Col>
                    </Row>
                </Row>
            </Col>
            <Col xs="4">
              <Serie2>
                <img width="147" height="88" src={SerieImage} alt="SerieImage" />
                <TextSerie> por Amanda Mol e Raval Filmes ★★★★★ </TextSerie>
                <TextSerie> NOVA SÉRIE </TextSerie>
                <TextSerie> PRÉ VENDA  19.03 </TextSerie>
                <TextSerie> 4 SÉRIES DISPONÍVEIS </TextSerie>
                <TextSerie> DESDE 2015 </TextSerie>
                <TextBody>
                  Verdadeiras séries produzidas para inspirar e encantar!
                  Sonhos, ilustração, jardinagem, aquarela e tudo que rodeia
                  o universo criativo, apresentado sob olhar da Ilustradora
                  Amanda Mol.
                  Produção e edição por Raval Filmes.
                </TextBody>
                <br />
                <Button> Ver as Séries </Button>
              </Serie2>
          </Col>
        </Row>
      </Serie>
    </Col>
  </Row>
)



export default Series;
