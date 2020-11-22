import React from 'react';

import { Container } from '~/styles/global';

import Travels from './style';

import Travel from '~/components/travel';

import Fade from 'react-reveal/Fade';

import { citiesAndMonths, itineraries } from '~/interfaces';

import { useRouter } from 'next/router';

interface Iprops {
  citiesAndMonths: citiesAndMonths;
  itineraries: itineraries[];
  fallback?: boolean;
};

const cpTravels: React.FC<Iprops> = ({ citiesAndMonths, itineraries, fallback }) => {
  const router = useRouter()

  const [form, setForm] = React.useState({
    location: {
      required: false,
      value: ''
    },
    month: {
      required: false,
      value: ''
    }
  });

  const searchItineraries = (event: any) => {
    event.preventDefault();

    const { location, month } = form;

    if(!location.value && !month.value) {
      router.push('/roteiros').then(() => window.scrollTo(0, 133));
    }else {
      router.push(`/roteiros/${location.value}/${month.value}`).then(() => window.scrollTo(0, 133));
    }
  };

  const handleChangeLocation = (value: string) => {
    setForm({
      ...form,
      location: {
        ...form.location,
        value
      },
      month: {
        ...form.month,
        required: true
      }
    });
  };

  const handleChangeMonth = (value: string) => {
    setForm({
      ...form,
      location: {
        ...form.location,
        required: true
      },
      month: {
        ...form.month,
        value
      }
    });
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
                    required={form.location.required}
                    value={form.location.value} 
                    onChange={e => handleChangeLocation(e.target.value)}
                  >
                    <option value="" disabled selected>selecionar</option>

                    {Object.entries(citiesAndMonths.cities).map((item, index) => (
                      <option key={index} value={item[1].slug}>{item[1].name}</option>
                    ))}
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
                    required={form.month.required}
                    value={form.month.value} 
                    onChange={e => handleChangeMonth(e.target.value)}
                  >
                    <option value="" disabled selected>selecionar</option>

                    {Object.entries(citiesAndMonths.months).map((item, index) => (
                      <option key={index} value={item[1].month.toLowerCase().replace(/ç/gi, 'c')}>{item[1].month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Fade>
          </div>

          <input type="submit" value="Ver todos os destinos" />
        </form>

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
