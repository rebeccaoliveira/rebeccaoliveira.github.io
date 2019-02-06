import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, fas } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  font-weight: 500;
  display: inline;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: right;
  vertical-align: baseline;
  word-wrap: break-word;
  margin-bottom: 50px;
`;

const PageLink = ({url, text, className}) => (
  <Link to={url} className={className}>
    {text}
  </Link>
)

const Anchor = styled(PageLink)`
  color: black;

  &:hover, active {
    color: #867e7e;
    text-decoration: underline;
  }
`

const AnchorTag = styled.a`
  color: black;

  &:hover, active {
    color: #867e7e;
    text-decoration: underline;
  }
`

const Footer = () => (
  <Container>
    <Row className="d-none d-md-block">
      <Col xs="12">
        <Row className="justify-content-around">
          <Col xs="2" className="text-center"><Anchor url="/" text="Home" /></Col>
          <Col xs="2" className="text-center"><Anchor url="/curriculum" text="Curriculum" /></Col>
          <Col xs="2" className="text-center"><Anchor url="/projects" text="Projects" /></Col>
          <Col xs="2" className="text-center"><Anchor url="/contact" text="Contact" /></Col>
          <Col xs="2" className="text-center"><AnchorTag href="https://medium.com/@RebyOliveira" target="_blank">Blog</AnchorTag></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs="12" className="text-center">
        <FontAwesomeIcon style={{marginTop: '30px'}} className="mx-auto d-inline" icon={faCode} size="1x" color="#F5A9A9" />
        <NormalText className="cd-flex justify-content-center pt-4"> with </NormalText>
        <FontAwesomeIcon className="mx-auto d-inline" icon={faHeart} size="1x" color="#F5A9A9" />
      </Col>
    </Row>
  </Container>
)


export default Footer;
