import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

const cpTravels: React.FC = () => (
  <Travels>
    <Container className="container small-container">
      <h1>Confira os nossos roteiros</h1>

      <div className="content-travels">
        <Travel 
          picture="https://picsum.photos/id/237/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Beto Carreiro" 
          price="647" 
          date="18 a 20 de<br /> Dezembro" 
          delay={0}
        />

        <Travel 
          picture="https://picsum.photos/id/238/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Gramado/RS" 
          price="647" 
          date="13 a 19 de<br /> Janeiro" 
          delay={200}
        />

        <Travel 
          picture="https://picsum.photos/id/239/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Bonito/MS" 
          price="647" 
          date="09 a 14 de<br /> Dezembro" 
          delay={250}
        />

        <Travel 
          picture="https://picsum.photos/id/240/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Balneário Camboriu/SC" 
          price="647" 
          date="18 a 20 de<br /> Dezembro" 
          delay={300}
        />

        <Travel 
          picture="https://picsum.photos/id/237/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Beto Carreiro" 
          price="647" 
          date="18 a 20 de<br /> Dezembro" 
          delay={350}
        />

        <Travel 
          picture="https://picsum.photos/id/238/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Gramado/RS" 
          price="647" 
          date="13 a 19 de<br /> Janeiro" 
          delay={400}
        />
      </div>
    </Container>
  </Travels>
);

export default cpTravels;
