import React from 'react';

import EmptyTravels from './style';

import { Container } from '~/styles/global';

import Travels from '~/pages/home/components/travels';

import { itineraries } from '~/interfaces';

interface Iprops {
  itineraries: itineraries[];
}

const cpEmptyTravels: React.FC<Iprops> = ({ itineraries }) => (
  <EmptyTravels>
    <Container className="container">
      <h2>Nenhuma viagem encontrada</h2>

      <p>Não encontramos nenhuma viagem saindo de <strong>Londrina</strong> em <strong>Dezembro</strong></p>
    </Container>

    <Travels itineraries={itineraries} fallback={true} />
  </EmptyTravels>
);

export default cpEmptyTravels;
