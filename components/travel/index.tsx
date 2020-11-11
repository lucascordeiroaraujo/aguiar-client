import React from 'react';

import Travel from './style';

import Link from 'next/link';

import Image from 'next/image';

import Fade from 'react-reveal/Fade';

import { itinerarieItem } from '~/interfaces';

import { monthsNames } from '~/utils';

import dayjs from 'dayjs';

interface Iprops {
  delay: number;
  slug: string;
  title: string;
  data: itinerarieItem;
};

const cpTravel: React.FC<Iprops> = ({ delay, slug, title, data }) => {

  const start = dayjs(data.output);

  const end = dayjs(data.arrival);

  let travelDate = '';

  if(end.month() !== start.month()) {
    travelDate = `${start.format('DD')} de ${monthsNames[start.month()].small} a<br/> ${end.format('DD')} de ${monthsNames[end.month()].small}`;
  } else {
    travelDate = `${start.format('DD')} a ${end.format('DD')} de ${monthsNames[end.month()].full}`;
  }

  return (
    <Travel>
      <Fade delay={delay}>
        <div>
          <Link href={`/roteiro/${slug}`}>
            <a href={`/roteiro/${slug}`} title="Confira">
              <Image 
                src={data.list_image.sizes['itineraries-list']} 
                alt={`${title} (${travelDate.replace('<br/>', '')})`} 
                title={`${title} (${travelDate.replace('<br/>', '')})`} 
                unsized
              />
            </a>
          </Link>

          <span>{data.included_resume}</span>
        </div>

        <h2>
          <Link href={`/roteiro/${slug}`}>
            <a href={`/roteiro/${slug}`} title="Confira" dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </h2>

        <div>
          <div className="travel-info">
            <div>
              <strong>
                <small>R$</small> {data.price}
              </strong>

              <span>{data.installment.toLowerCase()}</span>
            </div>

            <div>
              <span className="buy" dangerouslySetInnerHTML={{ __html: travelDate }} />
            </div>
          </div>

          <a 
            href={`https://api.whatsapp.com/send?phone=+554398406307&text=Olá, visitei seu site e tenho interesse nessa viagem: ${title} (${travelDate.replace('<br/>', '')})`} 
            title="Confira"
            target="_blank"
            rel="noopener noreferrer"
            className="buy"
          >
            <span>Quero comprar</span>
          </a>
        </div>
      </Fade>
    </Travel>
  );
};

export default cpTravel;
