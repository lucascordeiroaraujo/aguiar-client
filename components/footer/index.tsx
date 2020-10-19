import React from 'react';

import Footer from './style';

import { Container } from '~/styles/global';

const cpFooter: React.FC = () => (
  <Footer>
    <Container className="container small-container">
      <div>
        <strong>Entre em Contato</strong>

        <a
          href="mailto:contato@aguiarviagens.com.br"
          title="Enviar E-mail"
          className="email"
        >
          contato@aguiarviagens.com.br
        </a>

        <a href="tel:+554332563613" title="Ligar" className="phone">
          <small>43</small> 3256 3613
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=+554396013902&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20de%20seu%20site%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="phone"
        >
          <small>43</small> 9 9601 3902
        </a>
      </div>

      <div>
        <a
          href="#"
          title="Siga a Aguiar Viagens no Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-instagram"
        />

        <a
          href="#"
          title="Curta a página da Aguiar Viagens no Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-facebook2"
        />

        <a
          href="#"
          title="Confira os vídeos da Aguiar Viagens no YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-youtube"
        />
      </div>
    </Container>
  </Footer>
);

export default cpFooter;
