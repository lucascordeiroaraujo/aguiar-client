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
            <a title="Confira">
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
            <a title="Confira" dangerouslySetInnerHTML={{ __html: title }} />
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

          <Link href={`/roteiro/${slug}`}>
            <a 
              title="Confira"
              className="buy"
            >
              <span>+ Detalhes</span>
            </a>
          </Link>
        </div>
      </Fade>
    </Travel>
  );
};

export default cpTravel;
