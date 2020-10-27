import React from 'react';

import Header from '~/components/header'

import Travels from './components/travels';

import Moments from './components/moments';

import Videos from './components/videos';

import Pictures from './components/pictures';

import Newsletter from '~/components/newsletter';

import Footer from '~/components/footer';

import { citiesAndMonths, itineraries, youtubeVideos, testimonials, contactPage } from '~/interfaces';

interface Iprops {
  homeData: {
    citiesAndMonths: citiesAndMonths;
    itineraries: itineraries[];
    videos: youtubeVideos[];
    testimonials: testimonials;
    contact: contactPage;
  }
};

const pageHome: React.FC<Iprops> = ({ homeData }) => (
  <>
    <Header contact={homeData.contact} />

    {homeData.itineraries && (
      <Travels 
        citiesAndMonths={homeData.citiesAndMonths}
        itineraries={homeData.itineraries} 
      />
    )}

    {homeData.testimonials && (
      <Moments 
        testimonials={homeData.testimonials.acf.testimonials} 
        hasVideos={homeData.videos ? true : false}
      />
    )}

    {homeData.videos && (
      <Videos 
        videos={homeData.videos} 
        contact={homeData.contact}
      />
    )}

    <Pictures />

    <Newsletter />

    <Footer contact={homeData.contact} />
  </>
);

export default pageHome;
