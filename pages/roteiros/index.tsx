import React from 'react';

import { GetStaticProps } from 'next';

import Seo from '~/seo';

import Loader from '~/components/loader';

import Header from '~/components/header';

import Travels from './[city]/[month]/components/travels';

import EmptyTravels from './[city]/[month]/components/emptyTravels'

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

  const seo = {
    seo_title: '',
    seo_description: '',
    seo_image: ''
  };

  return (
    <>
      <Seo data={seo} />

      <Header contact={contact} fullBanner={true} />

      {itineraries && itineraries.length >= 1 ? (
        <Travels 
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      citiesAndMonths: await getData.getCitiesAndMonths(),
      itineraries: await getData.getItineraries('30', null, null),
      itinerariesFallBack: await getData.getItineraries('4', null, null),
      contact: await getData.getPage('11')
    },
    revalidate: 10
  };
};
