import React from 'react';

import Travel from './style';

import Link from 'next/link';

interface Iprops {
  picture: string;
  incluse: string;
  title: string;
  price: string;
  date: string;
}

const cpTravel: React.FC<Iprops> = ({ picture, incluse, title, price, date }) => (
  <Travel>
    

    <div>
      <Link href="/roteiros/slug">
        <a href="/roteiros/slug" title="Confira">
          <img 
            src={picture} 
            alt={title} 
            title={title} 
            width="313" 
            height="150" 
          />
        </a>
      </Link>

      <span>{incluse}</span>
    </div>

    <h2>
      <Link href="/roteiros/slug">
        <a href="/roteiros/slug" title="Confira">
          {title}
        </a>
      </Link>
    </h2>

    <div>
      <div className="travel-info">
        <div>
          <strong>
            <small>R$</small> {price}
          </strong>

          <span>em até 12x no cartão</span>
        </div>

        <div>
          <span className="buy" dangerouslySetInnerHTML={{ __html: date }} />
        </div>
      </div>

      <a 
        href={`https://api.whatsapp.com/send?phone=+554398406307&text=Olá, visitei seu site e tenho interesse nessa viagem: ${title} (${date.replace(/<br>|<br\/>|<br \/>/g, ``)})`} 
        title="Confira"
        target="_blank"
        rel="noopener noreferrer"
        className="buy"
      >
        <span>Quero comprar</span>
      </a>
    </div>
  </Travel>
);

export default cpTravel;
