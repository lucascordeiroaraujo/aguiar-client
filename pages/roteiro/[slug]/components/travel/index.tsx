import React from 'react';

import Travel, { PageBack } from './style';

import { Container } from '~/styles/global';

import Link from 'next/link';

import Image from 'next/image';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

import Countdown from 'react-countdown';

import { itineraries } from '~/interfaces';

import { monthsNames } from '~/utils';

import dayjs from 'dayjs';

interface Iprops {
  post: itineraries;
}

const cpTravel: React.FC<Iprops> = ({ post }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return '';
    } else {
      return `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
  };

  const start = dayjs(post.acf.output);

  const end = dayjs(post.acf.arrival);

  let travelDate = '';

  if (end.month() !== start.month()) {
    travelDate = `${start.format('DD')} de ${
      monthsNames[start.month()].small
    } a<br/> ${end.format('DD')} de ${monthsNames[end.month()].small}`;
  } else {
    travelDate = `${start.format('DD')} a ${end.format('DD')} de ${
      monthsNames[end.month()].full
    }`;
  }

  const boardingPlace = post.acf.boarding_place
    ? post.acf.boarding_place.map((item) => {
        return item.label;
      })
    : null;

  return (
    <>
      <Link href="/">
        <PageBack title="Voltar">
          <i className="icon-left-arrow"></i>
          voltar na página anterior
        </PageBack>
      </Link>

      <Container className="full">
        <Travel>
          {post.acf.image && (
            <Image
              src={post.acf.image.sizes.itinerarie}
              alt={`${post.title.rendered} (${travelDate.replace(
                '<br/>',
                ''
              )})`}
              title={`${post.title.rendered} (${travelDate.replace(
                '<br/>',
                ''
              )})`}
              unsized
            />
          )}

          <div className="travel-info">
            {post.acf.sale_type && (
              <Fade>
                <span className={`sale-type ${post.acf.sale_type.value}`}>
                  {post.acf.sale_type.label}
                </span>
              </Fade>
            )}

            <Fade delay={100}>
              <span className="countdown">
                <Countdown
                  date={`${post.acf.output}T00:00:01`}
                  renderer={renderer}
                />
              </span>
            </Fade>

            <div className="price">
              {post.acf.old_price && (
                <Fade bottom>
                  <div className="old-price">
                    <span>
                      De
                      <br />
                      R$
                    </span>
                    <span>{post.acf.old_price}</span>
                  </div>
                </Fade>
              )}

              <Fade delay={100} bottom>
                <div className="current-price">
                  <span>
                    Por
                    <br />
                    <strong>R$</strong>
                  </span>
                  <span>{post.acf.price}</span>
                </div>
              </Fade>
            </div>

            <div className="dates">
              <Fade>
                <span>
                  <small>saída</small>
                  {start.format('DD')}/{start.format('MM')}
                </span>
              </Fade>

              <Fade delay={100}>
                <span>
                  <small>retorno</small>
                  {end.format('DD')}/{end.format('MM')}
                </span>
              </Fade>
            </div>

            {post.acf.included && Object.keys(post.acf.included).length !== 0 && (
              <div className="included-in">
                <span>incluso</span>

                <ul>
                  {post.acf.included.map((item, index) => (
                    <Fade key={index}>
                      <li>{item.description}</li>
                    </Fade>
                  ))}
                </ul>
              </div>
            )}

            {boardingPlace && (
              <div className="boarding-location">
                <i className="icon-location"></i>

                <Fade>
                  <div>
                    <span>Local de Embarque</span>

                    <span>{boardingPlace.join(' > ')}</span>
                  </div>
                </Fade>
              </div>
            )}

            <Tada>
              <a
                href={`https://api.whatsapp.com/send?phone=+554398406307&text=Olá, visitei seu site e tenho interesse nessa viagem: ${
                  post.title.rendered
                } (${travelDate.replace('<br/>', '')})`}
                title="Confira"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com agente de viagens
              </a>
            </Tada>
          </div>
        </Travel>
      </Container>
    </>
  );
};

export default cpTravel;
