import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Seo from '~/seo';

import Loader from '~/components/loader';

import Header from '~/components/header';

import Travels from './components/travels';

import EmptyTravels from './components/emptyTravels';

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
}

export default function Index({
  citiesAndMonths,
  contact,
  itineraries,
  itinerariesFallBack,
}: Iprops) {
  const { isFallback, query } = useRouter();

  const { city } = query;

  if (isFallback) {
    return <Loader />;
  }

  const cityName = Object.values(citiesAndMonths.cities).filter(
    (item) => item.slug === city
  )[0].name;

  const seo = {
    seo_title: `Saindo de ${cityName} - Aguiar Viagens`,
    seo_description: `Confira nossas viagens saíndo de ${cityName}. Encontre a viagem ideal pra você com a Aguiar Viagens`,
    seo_image: '',
  };

  return (
    <>
      <Seo data={seo} />

      <Header contact={contact} fullBanner={true} />

      {itineraries && itineraries.length >= 1 ? (
        <Travels itineraries={itineraries} city={cityName} />
      ) : (
        <EmptyTravels
          citiesAndMonths={citiesAndMonths}
          itineraries={itinerariesFallBack}
          city={cityName}
        />
      )}

      <Newsletter />

      <Footer contact={contact} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const citiesAndMonths = await getData.getCitiesAndMonths();

  const months = Object.entries(citiesAndMonths.months).map((item: any) => {
    return item[1].slug;
  });

  const paths = [] as any;

  for (var i = 0; i < months.length; i++) {
    Object.entries(citiesAndMonths.cities).forEach((city: any) => {
      paths.push({
        params: {
          city: city[1].slug,
          month: months[i],
        },
      });
    });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { city } = context.params as any;

  return {
    props: {
      citiesAndMonths: await getData.getCitiesAndMonths(),
      itineraries: await getData.getItineraries('20', city),
      itinerariesFallBack: await getData.getItineraries('4', null),
      contact: await getData.getPage('11'),
    },
    revalidate: 10,
  };
};
