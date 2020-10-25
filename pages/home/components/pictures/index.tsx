import React from 'react';

import { Container } from '~/styles/global';

import Pictures from './style';

import Fade from 'react-reveal/Fade';

const cpPictures: React.FC = () => (
  <Pictures>
    <Container className="container">
      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-01.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-05.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-02.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-03.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-06.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-04.jpg')} alt="" />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <img src={require('~/public/images/placeholder/pic-07.jpg')} alt="" />
        </Fade>
      </div>
    </Container>
  </Pictures>
);

export default cpPictures;
