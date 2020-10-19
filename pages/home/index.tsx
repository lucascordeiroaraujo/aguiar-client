import React from 'react';

import Header from '~/components/header'

import Travels from './components/travels';

import Moments from './components/moments';

import Videos from './components/videos';

import Pictures from './components/pictures';

import Newsletter from '~/components/newsletter';

const pageHome: React.FC = () => (
  <>
    <Header />

    <Travels />

    <Moments />

    <Videos />

    <Pictures />

    <Newsletter />
  </>
);

export default pageHome;
