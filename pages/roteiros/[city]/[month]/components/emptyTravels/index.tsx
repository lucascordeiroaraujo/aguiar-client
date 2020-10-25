import React from 'react';

import EmptyTravels from './style';

import { Container } from '~/styles/global';

import Travels from '~/pages/home/components/travels';

import { itineraries } from '~/interfaces';

import { useRouter } from 'next/router';

interface Iprops {
  itineraries: itineraries[];
};

const cpEmptyTravels: React.FC<Iprops> = ({ itineraries }) => {
  const router = useRouter();

  const { city, month } = router.query;

  const monthName = `${(month as any).charAt(0).toUpperCase()}${(month as any).slice(1)}`.replace(/c/gi, 'ç')

  return (
    <EmptyTravels>
      <Container className="container">
        <h2>Nenhuma viagem encontrada</h2>

        <p>Não encontramos nenhuma viagem saindo de <strong>{city}</strong> em <strong>{monthName}</strong></p>
      </Container>

      <Travels itineraries={itineraries} fallback={true} />
    </EmptyTravels>
  );
};

export default cpEmptyTravels;
