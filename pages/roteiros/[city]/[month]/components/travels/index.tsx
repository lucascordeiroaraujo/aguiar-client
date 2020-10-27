import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import { citiesAndMonths, itineraries } from '~/interfaces';

import { useRouter } from 'next/router';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
};

const cpTravels: React.FC<Iprops> = ({ citiesAndMonths, itineraries }) => {
  const router = useRouter();

  const { city, month } = router.query;

  let monthName = '';

  if(city && month) {
    monthName = `${(month as any).charAt(0).toUpperCase()}${(month as any).slice(1)}`.replace(/c/gi, 'ç');
  }

  return (
    <Travels>
      <Container className="container small-container">
        <h1>Confira os nossos roteiros</h1>

        {(city && month) && (
          <p>Saindo de <strong>{citiesAndMonths.cities[city as any].name}</strong> em <strong>{monthName}</strong></p>
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
};

export default cpTravels;
