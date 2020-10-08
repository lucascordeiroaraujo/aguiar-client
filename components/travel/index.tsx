import React from 'react';

import Travel from './style';

const cpTravel: React.FC = () => (
  <Travel>
    <img src="https://fakeimg.pl/313x150/" alt="" />

    <span>transporte+hotel+ingresso</span>

    <h2>Beto Carrero</h2>

    <div>
      <div>
        <strong>
          <small>R$</small> 1.647
        </strong>

        <span>em até 12x no cartão</span>
      </div>

      <div>
        <span className="buy">
          18 a 20 de
          <br /> Dezembro
        </span>
      </div>
    </div>

    <a href="#" title="Confira">
      <span className="buy">Quero comprar</span>
    </a>
  </Travel>
);

export default cpTravel;
