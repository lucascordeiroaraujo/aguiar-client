import React from 'react';

import Header from '~/components/header'

import Travel from './components/travel'

import Moments from '~/pages/home/components/moments'

import Pictures from './components/pictures'

const pageRoteiro: React.FC = () => (
  <>
    <Header fullBanner={true} />

    <Travel />

    <Moments />

    <Pictures />
  </>
);

export default pageRoteiro;
