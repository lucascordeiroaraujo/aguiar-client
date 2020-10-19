import React from 'react';

import Travel, { PageBack } from './style'

import Link from 'next/link';

const cpTravel: React.FC = () => (
  <>
    <Link href="/roteiros">
      <PageBack title="Voltar">
        <i className="icon-left-arrow"></i>

        voltar na página anterior
      </PageBack>
    </Link>

    <Travel>
      <img src="https://picsum.photos/seed/picsum/800/800" alt="" />

      <div>
        <span className="pre-sale">Pré Venda</span>

        <span className="countdown">20H 40M 25S</span>

        <div className="price">
          <div>
            <span>De<br/>R$</span>
            <span>1100</span>
          </div>

          <div>
            <span>Por<br/><strong>R$</strong></span>
            <span>745</span>
          </div>
        </div>

        <div className="dates">
          <span>
            <small>saída</small>
            10/07
          </span>

          <span>
            <small>retorno</small>
            16/07
          </span>
        </div>

        <div className="included-in">
          <span>incluso</span>
          
          <ul>
            <li>Hotel com piscina</li>
            <li>Transporte</li>
            <li>02 Almoços</li>
            <li>02 guias acompanhante</li>
            <li>02 cafés da manhã</li>
            <li>Kit Aguiar viagem</li>
            <li>Ingresso para o parque</li>
          </ul>
        </div>

        <div className="boarding-location">
          <i className="icon-location"></i> 
          
          <div>
            <span>Local de Embarque</span>

            <span>Londrina &gt; Cambé &gt; Rolândia &gt; Arapongas &gt; Apucarana</span>
          </div>
        </div>

        <a 
          href={`https://api.whatsapp.com/send?phone=+554398406307&text=Olá, visitei seu site e tenho interesse nessa viagem: `} 
          title="Confira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar agora
        </a>
      </div>
    </Travel>
  </>
);

export default cpTravel;
