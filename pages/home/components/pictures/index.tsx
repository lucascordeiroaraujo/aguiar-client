import React from 'react';

import { Container } from '~/styles/global';

import Pictures from './style';

import Fade from 'react-reveal/Fade';

import Image from 'next/image';

const cpPictures: React.FC = () => (
  <Pictures>
    <Container className="container">
      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-01.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-05.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-02.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-03.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-06.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-04.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>

      <div className="item">
        <Fade>
          <Image 
            src={require('~/public/images/placeholder/pic-07.jpg')} 
            alt="" 
            unsized
          />
        </Fade>
      </div>
    </Container>
  </Pictures>
);

export default cpPictures;
