import React from 'react';

import EmptyTravels from './style';

import { Container } from '~/styles/global';

import Travels from '~/pages/home/components/travels';

import { citiesAndMonths, itineraries } from '~/interfaces';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
  city?: string;
}

const cpEmptyTravels: React.FC<Iprops> = ({
  citiesAndMonths,
  itineraries,
  city,
}) => (
  <EmptyTravels>
    <Container className="container">
      <h2>Nenhuma viagem encontrada</h2>

      {city && (
        <p>
          Não encontramos nenhuma viagem saindo de <strong>{city}</strong>
        </p>
      )}
    </Container>

    <Travels
      citiesAndMonths={citiesAndMonths}
      itineraries={itineraries}
      fallback={true}
    />
  </EmptyTravels>
);

export default cpEmptyTravels;
