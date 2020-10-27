import React from 'react'

import Pictures from './style';

import Fade from 'react-reveal/Fade';

import { wpImage } from '~/interfaces';

interface Iprops {
  pictures: wpImage[];
};

const cpPictures: React.FC<Iprops> = ({ pictures }) => {
  console.log(pictures)

  return (
  <Pictures>
    <Fade bottom>
      <h1>Confira as fotos da última viagem</h1>
    </Fade>

    <div className="content-pictures">
      {pictures.map((item, index) => (
        <Fade key={index}>
          <img 
            src={item.sizes["itinerarie-pictures"]} 
            alt={item.alt} 
            title={item.title} 
            width={item.sizes["itinerarie-pictures-width"]}
            height={item.sizes["itinerarie-pictures-height"]}
          />
        </Fade>
      ))}
    </div>
  </Pictures>
);
  };

export default cpPictures;
