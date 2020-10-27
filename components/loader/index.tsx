import React from 'react';

import Loader from './style';

const cpLoader: React.FC = () => (
  <Loader>
    <img
      src={require('~/public/images/aguiar-transportes.png')}
      alt="Aguiar Transportes"
      title="Aguiar Transportes"
      width="172"
      height="69"
    />

    <p>Aguarde, carregando...</p>
  </Loader>
);

export default cpLoader;
