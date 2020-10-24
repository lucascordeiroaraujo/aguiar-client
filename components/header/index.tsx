import React from 'react';

import { HeaderContainer, Header, Banner } from './style';

import { Container } from '~/styles/global';

import Link from 'next/link';

import {useRouter} from 'next/router';

import Fade from 'react-reveal/Fade';

interface Iprops {
  fullBanner?: boolean;
};

const cpHeader: React.FC<Iprops> = ({ fullBanner }) => {
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const handleMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  const router = useRouter();

  return (
    <HeaderContainer>
      <Header>
        <Fade>
          <Link href="/">
            <a title="Página inicial">
              <img
                src={require('~/public/images/aguiar-transportes.png')}
                alt="Aguiar Transportes"
                title="Aguiar Transportes"
                width="172"
                height="69"
              />
            </a>
          </Link>
        </Fade>

        <div className="social-networking">
          <Fade left>
          <a
            href="#"
            title="Siga a Aguiar Viagens no Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-instagram"
          />
          </Fade>

          <Fade left delay={200}>
            <a
              href="#"
              title="Curta a página da Aguiar Viagens no Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-facebook2"
            />
          </Fade>

          <Fade left delay={400}>
            <a
              href="#"
              title="Confira os vídeos da Aguiar Viagens no YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-youtube"
            />
          </Fade>
        </div>

        <button className={openedMenu ? 'active' : ''} onClick={handleMenu} />
      </Header>

      <Container className={fullBanner ? 'full' : ''}>
        <Fade>
          <Banner>
            {router.pathname === '/roteiros' && (
              <img
                src={require(`~/public/images/placeholder/encontre-a-viagem-ideal-pra-voce.jpg`)}
                alt="Encontre a viagem ideal pra você - Aguiar Transportes"
                title="Encontre a viagem ideal pra você - Aguiar Transportes"
                width="1680"
                height="780"
              />
            )}

            {router.pathname === '/' && (
              <img
                src={require(`~/public/images/placeholder/grandes-experiencias-em-cada-viagem.jpg`)}
                alt="Grandes experiências em cada viagem - Aguiar Transportes"
                title="Grandes experiências em cada viagem - Aguiar Transportes"
                width="1680"
                height="780"
              />
            )}

            {router.pathname === '/roteiros/[slug]' && (
              <img
                src={require(`~/public/images/placeholder/caldas-novas.jpg`)}
                alt="Grandes experiências em cada viagem - Aguiar Transportes"
                title="Grandes experiências em cada viagem - Aguiar Transportes"
                width="1680"
                height="780"
              />
            )}
          </Banner>
        </Fade>
      </Container>
    </HeaderContainer>
  );
};

export default cpHeader;