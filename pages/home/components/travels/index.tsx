import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import Fade from 'react-reveal/Fade';

import { itineraries } from '~/interfaces';

import { useRouter } from 'next/router';

import { monthsNames } from '~/utils';

interface Iprops {
  itineraries: itineraries[];
  fallback?: boolean;
};

const cpTravels: React.FC<Iprops> = ({ itineraries, fallback }) => {
  const router = useRouter()

  const [location, setLocation] = React.useState('');

  const [month, setMonth] = React.useState('');

  const searchItineraries = (event: any) => {
    event.preventDefault();

    router.push(`/roteiros/${location}/${month}`)
  };

  return (
    <Travels>
      <Container className="container">
        {!fallback && (
          <Fade bottom>
            <h1>Confira as melhores<br/> viagens pra você!</h1>
          </Fade>
        )}

        <form onSubmit={searchItineraries}>
          <div>
            <Fade>
              <div>
                <label htmlFor="city">
                  <i className="icon-location"></i> 
                  sua cidade
                </label>

                <div>
                  <select 
                    required
                    value={location} 
                    onChange={e => setLocation(e.target.value)}
                  >
                    <option value="" disabled selected>selecionar</option>

                    <option value="apucarana">Apucarana</option>

                    <option value="arapongas">Arapongas</option>

                    <option value="londrina">Londrina</option>

                    <option value="maringa">Maringá</option>

                    <option value="rolandia">Rolândia</option>
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
                  <select 
                    required
                    value={month} 
                    onChange={e => setMonth(e.target.value)}
                  >
                    <option value="" disabled selected>selecionar</option>

                    {monthsNames.map(item => (
                      <option value={item.full.toLowerCase().replace(/ç/gi, 'c')}>{item.full}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Fade>
          </div>

          <input type="submit" value="Ver todos os destinos" />
        </form>

        <div className={`content-travels${itineraries.length <= 3 ? ' centralized' : ''}`}>
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
