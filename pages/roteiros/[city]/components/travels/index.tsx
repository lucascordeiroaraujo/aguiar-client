import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import { itineraries } from '~/interfaces';

interface Iprops {
  itineraries: itineraries[];
  city?: string;
}

const cpTravels: React.FC<Iprops> = ({ itineraries, city }) => (
  <Travels>
    <Container className="container small-container">
      <h1>Confira os nossos roteiros</h1>

      {city && (
        <p>
          Saindo de <strong>{city}</strong>
        </p>
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
          );
        })}
      </div>
    </Container>
  </Travels>
);

export default cpTravels;
