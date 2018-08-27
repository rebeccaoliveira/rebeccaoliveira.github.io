import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Agenda from "../images/image_agenda.jpg";
import Aromatizador from "../images/image_aromatizador.jpg";
import CafeMoido from "../images/image_pacote_cafe.jpg";
import Card from "../images/image_card.jpg";
import Cartao from "../images/image_cartao.jpg";
import Colar from "../images/image_colar.jpg";
import DiarioBordo from "../images/image_diario_bordo.jpg";
import Fe from "../images/image_fe.jpg";

const ProductsModel = styled.div`
  border: solid 2px black;
  min-height: 335px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px
  padding-left: 15px;
  width:100%;
`;

const Products_div = styled.div`
  border: solid 2px rgb(68, 68, 68);
  min-height: 851px;
  width: 100%;
`;

const ProductTitle = styled.div`
  background: #fff;
  color: inherit;
  min-height: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
  color: #444;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ProductPrice = styled.div`
  background: #fff;
  color: inherit;
  align-items: fllex-end;
  text-align: right;
  font-size: 16px;
  font-weight: 900;
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
  color: #232121de;
`;

const ProductPayment = styled.div`
  background: #fff;
  color: inherit;
  align-items: fllex-end;
  text-align: right;
  font-size: 14px;
  font-weight: 900;
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
  color: #232121de;
  padding-top: 2px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid palevioletred;
  font-color: black;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 3px;
  float: right;
  font-weight: bold;
  font-family: open sans condensed,Helvetica,Arial,Lucida,sans-serif;
`;

const Queridinhos = () => (
<Row>
  <Col xs="1" />
  <Col xs= "10">
  {/* Início primeira linha */}
    <Row>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Agenda} alt="Agenda" />
          <ProductTitle>  Agenda </ProductTitle>
          <ProductPrice> R$ 97,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Aromatizador} alt="Aromatizador" />
          <ProductTitle> Aromatizador de ambientes </ProductTitle>
          <ProductPrice> R$ 97,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Fe} alt="Fe" />
          <ProductTitle> Lettering Fé </ProductTitle>
          <ProductPrice> R$ 97,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={DiarioBordo} alt="DiarioBordo" />
          <ProductTitle> Diário de Bordo </ProductTitle>
          <ProductPrice> R$ 97,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

    </Row>
  {/* Fim primeira linha */}

  {/* Início segunda linha */}
    <Row>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={CafeMoido} alt="CafeMoido" />
          <ProductTitle> Café Moído – Em cápsulas #origemúnica </ProductTitle>
          <ProductPrice> R$ 25,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 8,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Card} alt="Card" />
          <ProductTitle> Card </ProductTitle>
          <ProductPrice> R$ 79,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 26,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Cartao} alt="Cartao" />
          <ProductTitle> Cartão Personalizado </ProductTitle>
          <ProductPrice> R$ 21,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 7,00 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

      <Col xs="3">
        <ProductsModel id="products">
          <img width="185" height="185" src={Colar} alt="Colar" />
          <ProductTitle> Jóia Exclusiva </ProductTitle>
          <ProductPrice> R$ 145,00 </ProductPrice>
          <ProductPayment> ou 3 x R$ 48,33 sem juros </ProductPayment>
          <Button> Comprar </Button>
        </ProductsModel>
      </Col>

    </Row>

  </Col>
  <Col xs="1" />
</Row>
)

export default Queridinhos
