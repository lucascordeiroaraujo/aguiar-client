import React from 'react'

import Pictures from './style'

const cpPictures: React.FC = () => (
  <Pictures>
    <h1>Confira as fotos da última viagem</h1>

    <div>
      <img src="https://picsum.photos/id/238/300/250" alt="" />

      <img src="https://picsum.photos/id/236/300/250" alt="" />

      <img src="https://picsum.photos/id/233/300/250" alt="" />

      <img src="https://picsum.photos/id/234/300/250" alt="" />
    </div>
  </Pictures>
);

export default cpPictures;
