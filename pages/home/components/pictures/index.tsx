import React from 'react';

import { Container } from '~/styles/global';

import Pictures from './style';

const cpPictures: React.FC = () => (
  <Pictures>
    <Container className="container">
      <div className="item">
        <img src={require('~/public/images/placeholder/pic-01.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-05.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-02.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-03.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-06.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-04.jpg')} alt="" />
      </div>

      <div className="item">
        <img src={require('~/public/images/placeholder/pic-07.jpg')} alt="" />
      </div>
    </Container>
  </Pictures>
);

export default cpPictures;
