import React from 'react';

import { Container } from '~/styles/global';

import Newsletter from './style';

import Fade from 'react-reveal/Fade';

import { API_URL } from '~/services';

import InputMask from 'react-input-mask';

const cpNewsletter: React.FC = () => {
  const INITIAL_STATE = {
    email: '',
    whatsapp: '',
  };

  const [state, setState] = React.useState(INITIAL_STATE);

  const [feedbackForm, setFeedbackForm] = React.useState({
    loader: false,
    show: false,
    success: true
  });

  const sendNewsletter = async (event: any) => {
    event.preventDefault();

    setFeedbackForm({
      loader: true,
      show: true,
      success: true
    });

    try {
      await fetch(`${API_URL}/aguiar/registerNewsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          body: Object.values(state)
        })
      });

      setState(INITIAL_STATE);

      setFeedbackForm({
        loader: false,
        show: true,
        success: true
      });
    } catch(e) {
      setFeedbackForm({
        loader: false,
        show: true,
        success: false
      });
    }

    setTimeout(() => {
      setFeedbackForm({
        ...feedbackForm,
        show: false
      });
    }, 10000);
  };

  const resolveFeedback = () => {
    if(feedbackForm.loader) {
      return {
        icon: 'spinner',
        text: 'Enviando informações...'
      }
    } else if(!feedbackForm.success) {
      return {
        icon: 'cancel-circle',
        text: 'Erro ao salvar informações, tente novamente.'
      }
    } else {
      return {
        icon: 'checkmark',
        text: 'Cadastro realizado com sucesso.'
      }
    }
  }

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

        <form method="post" onSubmit={sendNewsletter}>
          <Fade bottom delay={100}>
            <input
              type="email"
              required
              placeholder="digite o seu e-mail"
              value={state.email}
              disabled={feedbackForm.loader}
              onChange={(e) =>
                setState({
                  ...state,
                  email: e.target.value
                })
              }
            />
          </Fade>

          <Fade bottom delay={300}>
            <InputMask
              type="tel"
              mask="99-99999999?"
              formatChars={{
                9: '[0-9]',
                '?': '[0-9]'
              }}
              required
              placeholder="whatsapp"
              value={state.whatsapp}
              disabled={feedbackForm.loader}
              onChange={(e) =>
                setState({
                  ...state,
                  whatsapp: e.target.value
                })
              }
            />
          </Fade>

          <Fade bottom delay={500}>
            <input type="submit" value="Cadastrar" />
          </Fade>

          {feedbackForm.show && (
            <div className="loader">
              <i className={`icon-${resolveFeedback().icon}`}></i>

              <span>{resolveFeedback().text}</span>
            </div>
          )}
        </form>
      </Newsletter>
    </Container>
  );
};

export default cpNewsletter;
