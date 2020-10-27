import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Loader from '~/components/loader';

import Header from '~/components/header';

import Travels from './components/travels';

import EmptyTravels from './components/emptyTravels'

import Newsletter from '~/components/newsletter';

import Footer from '~/components/footer';

import { citiesAndMonths, itineraries, contactPage } from '~/interfaces';

import getData from '~/services';

import { useRouter } from 'next/router';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
  itinerariesFallBack: itineraries[];
  contact: contactPage;
};

export default function Index({ citiesAndMonths, contact, itineraries, itinerariesFallBack }: Iprops) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Header contact={contact} fullBanner={true} />

      {itineraries && itineraries.length >= 1 ? (
        <Travels 
          citiesAndMonths={citiesAndMonths}
          itineraries={itineraries} 
        />
      ) : (
        <EmptyTravels 
          citiesAndMonths={citiesAndMonths}
          itineraries={itinerariesFallBack} 
        />
      )}

      <Newsletter />

      <Footer contact={contact} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const citiesAndMonths = await getData.getCitiesAndMonths();

  const months = Object.entries(citiesAndMonths.months).map((item: any) => {
    return item[1].slug
  });

  const paths = [] as any;

  for (var i = 0; i < citiesAndMonths.length; i++) {
    Object.keys(citiesAndMonths.cities).forEach(city => {
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
      citiesAndMonths: await getData.getCitiesAndMonths(),
      itineraries: await getData.getItineraries('20', city, month),
      itinerariesFallBack: await getData.getItineraries('4', null, null),
      contact: await getData.getPage('11')
    },
    revalidate: 10
  };
};
