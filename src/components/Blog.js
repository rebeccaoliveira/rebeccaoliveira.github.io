import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Plantas from "../images/Foto_Blog_01.jpg";
import Escalada from "../images/Foto_Blog_02.jpg";
import Calendario from "../images/Foto_Blog_03.jpg";



const Blog_Post = styled.div`
  border: solid 2px #EEEEEE;
  min-height: 474px;
  width:100%;
`;


const Blog_Title = styled.div`
  border: solid 2px #E0E0E0;
  min-height: 198px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-right: 126px;
  margin-left: 126px;
  width:100%;
`;

const BodyText = styled.div`
  font-size: 15px;
  margin-top: 30px;
  text-align: justify;
  line-height: 1.8;
  letter-spacing: 2px;
  color: black;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
  white-space: pre-line
`;
const BodyTitle = styled.div`
  font-size: 14px;
  text-transform: uppercase
  letter-spacing: 4px;
  font-weight: 700;
  text-align: left;
  color: black;
  font-family: 'Open Sans Condensed',Helvetica,Arial,Lucida,sans-serif;
`;

const ButtonPlus = styled.button`
  padding: 6px 14px 6px 14px;
  color: #ffffff!important;
  border-radius: 25px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase!important;
  background-color: #ff4197
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
`;

const PinkButton = styled.button`
  background-color: #ff4197;
  border-radius: 25px;
`

const Blog = () => (
  <Row>
    <Col xs="1" />
    <Col xs="10">

      <Row>

        <Col xs="4">
          <Blog_Post>
            <div>
              <Card>
                <CardImg top width="100%" src={Plantas} alt="Plantas"/>
                <CardBody>
                  <CardTitle> <BodyTitle> UM QUASE TUDO </BodyTitle> </CardTitle>
                  <CardSubtitle> <BodyTitle> #DIADAMULHER </BodyTitle> </CardSubtitle>
                  <CardText> <BodyText> Mais que tudo, um quase tudo. Simplesmente é o que sou. Escolhi assim, ou mesmo escolhendo por mim, permaneço infinita em passos firmes que dou. Não tem um só lugar que eu não faça luz. Minha natureza é de heroína, a intuição me conduz. Docemente louca, às vezes,... </BodyText> </CardText>
                  <PinkButton> Para Inspirar </PinkButton>
                </CardBody>
              </Card>
            </div>
          </Blog_Post>
        </Col>

        <Col xs="4">
          <Blog_Post>
            <div>
              <Card>
                <CardImg top width="100%" src={Calendario} alt="Calendario"/>
                <CardBody>
                  <CardTitle> <BodyTitle> WALLPAPER 2018 – </BodyTitle>  </CardTitle>
                  <CardSubtitle> <BodyTitle> DOWNLOAD </BodyTitle> </CardSubtitle>
                  <CardText> <BodyText> Nosso wallpaper 2018  lindo de viver está no ar! Demorou, mas ainda em tempo.  amandamol.com.br > cursos.amandamol.com.br – Como leitor do Blog você tem cupom de desconto exclusivo nas Oficinas! Utilize: #blogAM e desfrute de 10% de desconto em sua inscrição!... </BodyText> </CardText>
                  <Button> Para Inspirar </Button>
                </CardBody>
              </Card>
            </div>
          </Blog_Post>
        </Col>

          <Col xs="4">
            <Blog_Post>
              <div>
                <Card>
                  <CardImg top width="100%" src={Escalada} alt="Escalada"/>
                  <CardBody>
                    <CardTitle> <BodyTitle> DELICADAMENTE FORTE </BodyTitle> </CardTitle>
                    <CardSubtitle> <BodyTitle> PORQUE SIM </BodyTitle> </CardSubtitle>
                    <CardText> <BodyText> Sempre fui de extremos. E sempre fui mal interpretada por manter esse segredo. Pois bem, é aqui que começo uma história de “amor e comédia” em mais um capítulo da série de posts #ladoB: Crossfit & Jazz, delicadamente forte porque sim. (“Cross o quê, Deus? Ahh tá,... </BodyText> </CardText>
                    <Button> Lado B </Button>
                  </CardBody>
                </Card>
              </div>
            </Blog_Post>
          </Col>
          <Row className="justify-content-center">
            <Col xs="12" className="align-self-center">
              <ButtonPlus> + Post </ButtonPlus>
            </Col>
          </Row>
      </Row>
    </Col>
    <Col xs="1" />
  </Row>
)


export default Blog;
