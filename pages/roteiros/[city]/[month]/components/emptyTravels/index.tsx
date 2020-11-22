import React from 'react';

import EmptyTravels from './style';

import { Container } from '~/styles/global';

import Travels from '~/pages/home/components/travels';

import { citiesAndMonths, itineraries } from '~/interfaces';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
  city?: string;
  month?: string;
};

const cpEmptyTravels: React.FC<Iprops> = ({ citiesAndMonths, itineraries, city, month }) => (
  <EmptyTravels>
    <Container className="container">
      <h2>Nenhuma viagem encontrada</h2>

      {(city && month) && (
        <p>Não encontramos nenhuma viagem saindo de <strong>{city}</strong> em <strong>{month}</strong></p>
      )}
    </Container>

    <Travels 
      citiesAndMonths={citiesAndMonths}
      itineraries={itineraries} fallback={true} 
    />
  </EmptyTravels>
);

export default cpEmptyTravels;
