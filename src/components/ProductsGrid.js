import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Fe from "../images/image_fe.jpg";
import Harmonia from "../images/image_harmonia.jpg";
import Intuicao from "../images/image_intuicao.jpg";
import Ternura from "../images/image_ternura.jpg";
import Xicara from "../images/image_cafes_xicaras.jpg";
import CafeEspecial from "../images/image_cafe_especial_moido.jpg";
import DiarioBordo from "../images/image_diario_bordo.jpg";
import KitDiario from "../images/image_kit_diario.jpg";

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

const ProductsGrid = () => (
  <Row>
    <Col xs="1" />
    <Col xs= "10">
    {/* Início primeira linha */}
      <Row>

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
            <img width="185" height="185" src={Harmonia} alt="Harmonia" />
            <ProductTitle> Lettering Harmonia </ProductTitle>
            <ProductPrice> R$ 97,00 </ProductPrice>
            <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
            <Button> Comprar </Button>
          </ProductsModel>
        </Col>

        <Col xs="3">
          <ProductsModel id="products">
            <img width="185" height="185" src={Intuicao} alt="Intuicao" />
            <ProductTitle> Lettering Intuição </ProductTitle>
            <ProductPrice> R$ 97,00 </ProductPrice>
            <ProductPayment> ou 3 x R$ 32,33 sem juros </ProductPayment>
            <Button> Comprar </Button>
          </ProductsModel>
        </Col>

        <Col xs="3">
          <ProductsModel id="products">
            <img width="185" height="185" src={Ternura} alt="Ternura" />
            <ProductTitle> Lettering Ternura </ProductTitle>
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
            <img width="185" height="185" src={Xicara} alt="Xicara" />
            <ProductTitle> Café Especial – Em cápsulas #origemúnica </ProductTitle>
            <ProductPrice> R$ 25,00 </ProductPrice>
            <ProductPayment> ou 3 x R$ 8,33 sem juros </ProductPayment>
            <Button> Comprar </Button>
          </ProductsModel>
        </Col>

        <Col xs="3">
          <ProductsModel id="products">
            <img width="185" height="185" src={DiarioBordo} alt="DiarioBordo" />
            <ProductTitle> Diário de Bordo </ProductTitle>
            <ProductPrice> R$ 79,00 </ProductPrice>
            <ProductPayment> ou 3 x R$ 26,33 sem juros </ProductPayment>
            <Button> Comprar </Button>
          </ProductsModel>
        </Col>

        <Col xs="3">
          <ProductsModel id="products">
            <img width="185" height="185" src={CafeEspecial} alt="CafeEspecial" />
            <ProductTitle> AM Café Especial – Moído 250 g #blendexclusivo </ProductTitle>
            <ProductPrice> R$ 21,00 </ProductPrice>
            <ProductPayment> ou 3 x R$ 7,00 sem juros </ProductPayment>
            <Button> Comprar </Button>
          </ProductsModel>
        </Col>

        <Col xs="3">
          <ProductsModel id="products">
            <img width="185" height="185" src={KitDiario} alt="KitDiario" />
            <ProductTitle> Kit: Diário de Bordo + Porta Passaporte + Caderninho </ProductTitle>
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

export default ProductsGrid
