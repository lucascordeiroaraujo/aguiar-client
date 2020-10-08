import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

const cpTravels: React.FC = () => (
  <Travels>
    <Container className="container">
      <h1>Confira as melhores viagens pra você!</h1>

      <div className="content-travels">
        <Travel />

        <Travel />

        <Travel />

        <Travel />
      </div>
    </Container>
  </Travels>
);

export default cpTravels;
