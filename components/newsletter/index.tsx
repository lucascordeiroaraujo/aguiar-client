import React from 'react';

import { Container } from '~/styles/global';

import Newsletter from './style';

import Fade from 'react-reveal/Fade';

const cpNewsletter: React.FC = () => {
  const INITIAL_STATE = {
    email: {
      key: 'E-mail',
      value: '',
    },
    whatsapp: {
      key: 'WhatsApp',
      value: '',
    },
  };

  const [state, setState] = React.useState(INITIAL_STATE);

  return (
    <Container>
      <Newsletter>
        <div>
          <Fade bottom>
            <strong>
              Só quem é membro
              <br />
              fica por dentro
              <br />
              das melhores viagens
            </strong>
          </Fade>

          <Fade bottom delay={200}>
            <p>
              Faça o cadastro gratuitamente e receba sempre em primeira
              <br /> mão as ofertas exclusivas e personalizadas para sua viagem.
            </p>
          </Fade>
        </div>

        <form method="post">
          <Fade bottom delay={100}>
            <input
              type="email"
              required
              placeholder="digite o seu e-mail"
              value={state.email.value}
              onChange={(e) =>
                setState({
                  ...state,
                  email: {
                    ...state.email,
                    value: e.target.value,
                  },
                })
              }
            />
          </Fade>

          <Fade bottom delay={300}>
            <input
              type="tel"
              required
              placeholder="whatsapp"
              value={state.whatsapp.value}
              onChange={(e) =>
                setState({
                  ...state,
                  whatsapp: {
                    ...state.whatsapp,
                    value: e.target.value,
                  },
                })
              }
            />
          </Fade>

          <Fade bottom delay={500}>
            <input type="submit" value="Cadastrar" />
          </Fade>
        </form>
      </Newsletter>
    </Container>
  );
};

export default cpNewsletter;
