import React from 'react';

import Footer from './style';

import { Container } from '~/styles/global';

import Fade from 'react-reveal/Fade';

import { contactPage } from '~/interfaces'

interface Iprops {
  contact: contactPage;
};

const cpFooter: React.FC<Iprops> = ({ contact }) => {
  let hasContact = null

  if(contact) {
    hasContact = contact.acf
  }

  return (
    <Footer className={`${!hasContact ? 'empty' : ''}`}>
      <Container className="container small-container">
        {hasContact && (
          <>
            <div>
              <Fade>
                <strong>Entre em Contato</strong>
              </Fade>

              {hasContact.email && (
                <Fade delay={200}>
                  <a
                    href={`mailto:${hasContact.email}`}
                    title="Enviar E-mail"
                    className="email"
                  >
                    {hasContact.email}
                  </a>
                </Fade>
              )}

              {hasContact.phone && (
                <Fade delay={400}>
                  <a href={`tel:+55${hasContact.phone.replace(/[()-. ]/g, '')}`} title="Ligar" className="phone">
                    <small>{hasContact.phone.replace(/[()-. ]/g, '').substring(0,2)}</small> {hasContact.phone.substring(2,20)}
                  </a>
                </Fade>
              )}

              {hasContact.whatsapp && (
                <Fade delay={600}>
                  <a
                    href={`https://api.whatsapp.com/send?phone=+55${hasContact.whatsapp.replace(/[()-. ]/g, '')}&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20de%20seu%20site%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="phone"
                  >
                    <small>{hasContact.whatsapp.replace(/[()-. ]/g, '').substring(0,2)}</small> {hasContact.whatsapp.substring(2,20)}
                  </a>
                </Fade>
              )}
            </div>

            <div>
              {hasContact.instagram && (
                <Fade left>
                  <a
                    href={hasContact.instagram}
                    title="Siga a Aguiar Viagens no Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-instagram"
                  />
                </Fade>
              )}

              {hasContact.facebook && (
                <Fade left delay={200}>
                  <a
                    href={hasContact.facebook}
                    title="Curta a página da Aguiar Viagens no Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-facebook2"
                  />
                </Fade>
              )}

              {hasContact.youtube && (
                <Fade left delay={400}>
                  <a
                    href={hasContact.youtube}
                    title="Confira os vídeos da Aguiar Viagens no YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-youtube"
                  />
                </Fade>
              )}
            </div>
          </>
        )}
      </Container>
    </Footer>
  );
};

export default cpFooter;
