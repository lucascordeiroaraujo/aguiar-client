import React from 'react'

import Pictures from './style';

import Image from 'next/image';

import { Container } from '~/styles/global';

import Fade from 'react-reveal/Fade';

import { wpImage } from '~/interfaces';

interface Iprops {
  pictures: wpImage[];
};

const cpPictures: React.FC<Iprops> = ({ pictures }) => (
  <Container className="full">
    <Pictures>
      <Fade bottom>
        <h1>Confira as fotos da última viagem</h1>
      </Fade>

      <div className="content-pictures">
        {pictures.map((item, index) => (
          <div key={index}>
            <Fade>
              <Image 
                src={item.sizes["itinerarie-pictures"]} 
                alt={item.alt} 
                title={item.title} 
                unsized
              />
            </Fade>
          </div>
        ))}
      </div>
    </Pictures>
  </Container>
);

export default cpPictures;
