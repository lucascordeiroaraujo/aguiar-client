import { GetStaticProps } from 'next';

import Seo from '~/seo';

import PageHome from './home';

import Loader from '~/components/loader';

import {
  citiesAndMonths,
  itineraries,
  youtubeVideos,
  testimonials,
  contactPage,
} from '~/interfaces';

import { useRouter } from 'next/router';

import getData from '~/services';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
  videos: youtubeVideos[];
  testimonials: testimonials;
  contact: contactPage;
}

export default function Index(props: Iprops) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Seo />

      <PageHome homeData={props} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      citiesAndMonths: await getData.getCitiesAndMonths(),
      itineraries: await getData.getItineraries('4', null),
      videos: await getData.youTubeVideos(),
      testimonials: await getData.getPage('7'),
      contact: await getData.getPage('11'),
    },
    revalidate: 10,
  };
};
