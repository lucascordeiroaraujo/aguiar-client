import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const cpTravels: React.FC = () => (
  <Travels>
    <Container className="container">
      <Fade bottom>
        <h1>Confira as melhores<br/> viagens pra você!</h1>
      </Fade>

      <form>
        <Fade>
          <div>
            <label htmlFor="city">
              <i className="icon-location"></i> 
              sua cidade
            </label>

            <div>
              <select>
                <option value="" disabled selected>selecionar</option>

                <option value="Londrina">Londrina</option>

                <option value="Maringá">Maringá</option>
              </select>
            </div>
          </div>
        </Fade>

        <Fade delay={200}>
          <div>
            <label htmlFor="city">
              <i className="icon-calendar"></i> 
              selecione o mês de viagem
            </label>

            <div>
              <select>
                <option value="" disabled selected>selecionar</option>

                <option value="01">Janeiro</option>

                <option value="02">Fevereiro</option>

                <option value="03">Março</option>

                <option value="04">Abril</option>

                <option value="05">Maio</option>

                <option value="06">Junho</option>

                <option value="07">Julho</option>

                <option value="08">Agosto</option>

                <option value="09">Setembro</option>

                <option value="10">Outubro</option>

                <option value="11">Novembro</option>

                <option value="12">Dezembro</option>
              </select>
            </div>
          </div>
        </Fade>
      </form>

      <Link href="/roteiros">
        <a title="Confira">Ver todos os destinos</a>
      </Link>

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
          delay={400}
        />

        <Travel 
          picture="https://picsum.photos/id/240/313/150"
          incluse="transporte+hotel+ingresso" 
          title="Balneário Camboriu/SC" 
          price="647" 
          date="18 a 20 de<br /> Dezembro" 
          delay={600}
        />
      </div>
    </Container>
  </Travels>
);

export default cpTravels;
