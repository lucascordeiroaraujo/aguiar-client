import React from 'react';

import { HeaderContainer, Header, Banner } from './style';

import { Container } from '~/styles/global';

const cpHeader: React.FC = () => {
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const handleMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <HeaderContainer>
      <Header>
        <img
          src={require('~/public/images/aguiar-transportes.png')}
          alt="Aguiar Transportes"
          title="Aguiar Transportes"
          width="172"
          height="69"
        />

        <div className="social-networking">
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

        <button className={openedMenu ? 'active' : ''} onClick={handleMenu} />
      </Header>

      <Container>
        <Banner>
          <img
            src={require('~/public/images/placeholder/grandes-experiencias-em-cada-viagem.jpg')}
            alt="Grandes experiências em cada viagem - Aguiar Transportes"
            title="Grandes experiências em cada viagem - Aguiar Transportes"
            width="1680"
            height="780"
          />
        </Banner>
      </Container>
    </HeaderContainer>
  );
};

export default cpHeader;
