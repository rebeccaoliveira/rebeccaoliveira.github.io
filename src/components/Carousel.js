import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import BannerOne from "../images/banner_one.jpg";
import BannerTwo from "../images/banner_two.jpg";
import BannerThree from "../images/banner_three.jpg";
import BannerFour from "../images/banner_four.jpg";




const items = [
  {
    src: BannerOne,
    altText: '',
    caption: ''
  },
  {
    src: BannerTwo,
    altText: '',
    caption: ''
  },
  {
    src: BannerThree,
    altText: '',
    caption: ''
  },
  {
    src: BannerFour,
    altText: '',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
