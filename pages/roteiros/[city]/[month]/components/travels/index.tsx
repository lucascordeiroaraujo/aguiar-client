import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import { itineraries } from '~/interfaces';

interface Iprops {
  itineraries: itineraries[];
  city?: string;
  month?: string;
};

const cpTravels: React.FC<Iprops> = ({ itineraries, city, month }) => (
  <Travels>
    <Container className="container small-container">
      <h1>Confira os nossos roteiros</h1>

      {(city && month) && (
        <p>Saindo de <strong>{city}</strong> em <strong>{month}</strong></p>
      )}

      <div className="content-travels">
        {itineraries.map((item, index) => {
          return (
            <Travel 
              key={index}
              slug={item.slug}
              title={item.title.rendered}
              data={item.acf}
              delay={0}
            />
          )
        })}
      </div>
    </Container>
  </Travels>
);

export default cpTravels;
