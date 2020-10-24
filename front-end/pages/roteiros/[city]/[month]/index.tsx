import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Header from '~/components/header';

import Travels from './components/travels';

import EmptyTravels from './components/emptyTravels'

import Newsletter from '~/components/newsletter';

import Footer from '~/components/footer';

import { itineraries, contactPage } from '~/interfaces';

import getData from '~/services';

interface Iprops {
  itineraries: itineraries[];
  itinerariesFallBack: itineraries;
  contact: contactPage;
};

export default function Index({ contact, itineraries, itinerariesFallBack }: Iprops) {
  return (
    <>
      <Header contact={contact} fullBanner={true} />

      {itineraries.length ? (
        <Travels itineraries={itineraries} />
      ) : (
        <EmptyTravels itineraries={itinerariesFallBack} />
      )}

      <Newsletter />

      <Footer contact={contact} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const months = [
    'janeiro',
    'fevereiro',
    'marco',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ];

  const citys = ['apucarana', 'arapongas', 'londrina', 'maringa', 'rolandia'];

  const paths = [] as any;

  for (var i = 0; i < 12; i++) {
    citys.forEach(city => {
      paths.push({
        params: {
          city,
          month: months[i]
        }
      })
    })
  }

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { city, month } = context.params as any;

  return {
    props: {
      itineraries: await getData.getItineraries('20', city, month),
      itinerariesFallBack: await getData.getItineraries('4', null, null),
      contact: await getData.getPage('11')
    },
    revalidate: 10
  };
};
