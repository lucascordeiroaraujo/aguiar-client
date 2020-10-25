import { GetStaticProps } from 'next';

import PageHome from './home';

import { itineraries, youtubeVideos, testimonials, contactPage } from '~/interfaces';

import { useRouter } from 'next/router';

import getData from '~/services';

interface Iprops {
  itineraries: itineraries[];
  videos: youtubeVideos[];
  testimonials: testimonials;
  contact: contactPage;
};

export default function Index(props: Iprops) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <PageHome homeData={props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      itineraries: await getData.getItineraries('4', null, null),
      videos: await getData.youTubeVideos(),
      testimonials: await getData.getPage('7'),
      contact: await getData.getPage('11')
    },
    revalidate: 10
  };
};
