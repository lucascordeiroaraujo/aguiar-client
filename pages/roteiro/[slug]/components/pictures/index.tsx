import React from 'react'

import Pictures from './style';

import Fade from 'react-reveal/Fade';

const cpPictures: React.FC = () => (
  <Pictures>
    <Fade bottom>
      <h1>Confira as fotos da última viagem</h1>
    </Fade>

    <div>
      <Fade>
        <img src="https://picsum.photos/id/238/300/250" alt="" />
      </Fade>

      <Fade delay={100}>
        <img src="https://picsum.photos/id/236/300/250" alt="" />
      </Fade>

      <Fade delay={200}>
        <img src="https://picsum.photos/id/233/300/250" alt="" />
      </Fade>

      <Fade delay={300}>
        <img src="https://picsum.photos/id/234/300/250" alt="" />
      </Fade>
    </div>
  </Pictures>
);

export default cpPictures;
