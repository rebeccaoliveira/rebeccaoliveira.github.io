import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';

const VideoBox_Left = styled.div`
  min-height: 500px;
  width: 100%;
  padding-top: 15px;
`;

const VideoBox_Right = styled.div`
  min-height: 500px;
  width: 100%;
  padding-top: 15px;
`;


const WrapperVideo = styled.section`
  min-height: 269px;
  display: block;
  margin-top: 105px;
  position: absolute;
`;

const Title = styled.h3`
  font-size: 26px;
  margin-left: 90px;
  margin-top: 50px;
  letter-spacing: 2px;
  text-align: center;
  color: palevioletred;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  `;

const TextBody = styled.div`
  font-size: 15px;
  text-align: justify;
  line-height: 1.8;
  letter-spacing: 2px;
  color: black;
  margin-top: 20px;
  margin-left: 90px;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  white-space: pre-line
  `;

const VideoArea = () => (
    <Row>
      <Col xs="1" />
      <Col xs="10">
        <Row>
          <Col xs="6">
              <VideoBox_Left>
                <WrapperVideo>
                  <iframe width="478" height="269" src="https://www.youtube.com/embed/JY4Upp0xYaw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </WrapperVideo>
              </VideoBox_Left>
          </Col>
          <Col xs="6">
              <VideoBox_Right>
                <Title> SOBRE SEGUIR A SUA INTUIÇÃO </Title>
                <TextBody>
                Este mini doc compartilha de um jeito singular a história do meu trabalho, minha decisão de estar onde escolhi estar, a trajetória até a inauguração da loja física e o que me compõe como empreendedora-sonhadora, meu valioso lado B. É um vídeo sobre propósito, escolhas, leveza e vida. Sobre acreditar em um sonho e apostar todas as suas fichas em você mesmo, pois só VOCÊ (e o seu coração) sabem o quanto tudo isso faz sentido no final! Sobre amar o que se faz e querer aprender, mudar e se reinventar quantas vezes for preciso. Um vídeo sobre OUVIR A SUA INTUIÇÃO e buscar ser feliz pelo caminho, aproveitando o presente. O bem mais precioso que temos.
                </TextBody>
               </VideoBox_Right>
          </Col>
        </Row>
      </Col>
      <Col xs="1" />
    </Row>
)
  export default VideoArea;
