import React from 'react';

import Travel, { PageBack } from './style';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

import Countdown from 'react-countdown';

const cpTravel: React.FC = () => {

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setCounter(counter + 1)
  }, []);

  setInterval(() => {
    setCounter(counter + 1)
  }, 30000);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return 'You are good to go!';
    } else {
      return `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
  };

  return (
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
          <Fade>
            <span className="pre-sale">Pré Venda</span>
          </Fade>

          <Fade delay={100}>
            <span className="countdown">
              <Countdown
                date={Date.now() + 100000000}
                renderer={renderer}
              />
            </span>
          </Fade>

          <div className="price">
            <Fade bottom>
              <div>
                <span>De<br/>R$</span>
                <span>1100</span>
              </div>
            </Fade>

            <Fade delay={100} bottom>
              <div>
                <span>Por<br/><strong>R$</strong></span>
                <span>745</span>
              </div>
            </Fade>
          </div>

          <div className="dates">
            <Fade>
            <span>
              <small>saída</small>
              10/07
            </span>
            </Fade>

            <Fade delay={100}>
              <span>
                <small>retorno</small>
                16/07
              </span>
            </Fade>
          </div>

          <div className="included-in">
            <span>incluso</span>
            
            <ul>
              <Fade>
                <li>Hotel com piscina</li>
              </Fade>

              <Fade delay={100}>
                <li>Transporte</li>
              </Fade>

              <Fade delay={150}>
                <li>02 Almoços</li>
              </Fade>

              <Fade delay={200}>
                <li>02 guias acompanhante</li>
              </Fade>

              <Fade delay={250}>
                <li>02 cafés da manhã</li>
              </Fade>

              <Fade delay={300}>
                <li>Kit Aguiar viagem</li>
              </Fade>

              <Fade delay={350}>
                <li>Ingresso para o parque</li>
              </Fade>
            </ul>
          </div>

          <div className="boarding-location">
            <i className="icon-location"></i> 
            
            <Fade>
              <div>
                <span>Local de Embarque</span>

                <span>Londrina &gt; Cambé &gt; Rolândia &gt; Arapongas &gt; Apucarana</span>
              </div>
            </Fade>
          </div>

          <Tada spy={counter}>
            <a 
              href={`https://api.whatsapp.com/send?phone=+554398406307&text=Olá, visitei seu site e tenho interesse nessa viagem: `} 
              title="Confira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar agora
            </a>
          </Tada>
        </div>
      </Travel>
    </>
  );
};

export default cpTravel;
