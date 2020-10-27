import React from 'react';

import EmptyTravels from './style';

import { Container } from '~/styles/global';

import Travels from '~/pages/home/components/travels';

import { citiesAndMonths, itineraries } from '~/interfaces';

import { useRouter } from 'next/router';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
};

const cpEmptyTravels: React.FC<Iprops> = ({ citiesAndMonths, itineraries }) => {
  const router = useRouter();

  const { city, month } = router.query;

  const monthName = `${(month as any).charAt(0).toUpperCase()}${(month as any).slice(1)}`.replace(/c/gi, 'ç')

  return (
    <EmptyTravels>
      <Container className="container">
        <h2>Nenhuma viagem encontrada</h2>

        <p>Não encontramos nenhuma viagem saindo de <strong>{citiesAndMonths.cities[city as any].name}</strong> em <strong>{monthName}</strong></p>
      </Container>

      <Travels 
        citiesAndMonths={citiesAndMonths}
        itineraries={itineraries} fallback={true} 
      />
    </EmptyTravels>
  );
};

export default cpEmptyTravels;
