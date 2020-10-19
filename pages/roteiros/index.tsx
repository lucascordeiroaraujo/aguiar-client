import React from 'react';

import Header from '~/components/header';

import Travels from './components/travels';

import Newsletter from '~/components/newsletter';

const pageRoteiros: React.FC = () => (
  <>
    <Header fullBanner={true} />

    <Travels />

    <Newsletter />
  </>
);

export default pageRoteiros;
