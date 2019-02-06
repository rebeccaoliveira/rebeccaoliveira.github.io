import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import { Container} from 'reactstrap';
import HeaderHome from '../components/HeaderHome';
import MyCv from '../components/MyCv';
import Footer from '../components/Footer';


const Journey = () => (
  <div>
    <Helmet
      title="Rebecca Oliveira -  Curriculum"
      meta={[
        { name: 'description', content: 'Rebecca Oliveira Curriculum' },
        { name: 'keywords', content: 'Curriculum, frontend developer, developer' },
      ]}
    />
    <Container>
      <HeaderHome />
      <MyCv />
      <Footer />
    </Container>
  </div>
);

export default Journey;
