import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Seo from '~/seo';

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
  const { isFallback, query } = useRouter();

  const { city, month } = query;

  if (isFallback) {
    return <Loader />;
  }

  let seo;

  if(city && month) {
    const monthName = `${(month as any).charAt(0).toUpperCase()}${(month as any).slice(1)}`.replace(/c/gi, 'ç');

    const cityName = citiesAndMonths.cities[city as any].name;

    seo = {
      seo_title: `Saindo de ${cityName} em ${monthName} - Aguiar Viagens`,
      seo_description: `Confira nossas viagens saíndo de ${cityName} em ${monthName}. Encontre a viagem ideal pra você com a Aguiar Viagens`,
      seo_image: ''
    };
  } else {
    seo = {
      seo_title: '',
      seo_description: '',
      seo_image: ''
    };
  }

  return (
    <>
      <Seo data={seo} />

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

  for (var i = 0; i < months.length; i++) {
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
