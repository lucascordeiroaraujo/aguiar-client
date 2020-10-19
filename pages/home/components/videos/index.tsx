import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Container } from '~/styles/global';

import Videos from './style';

import Fade from 'react-reveal/Fade';

export default function cpVideos({
  videos,
  teste
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(videos, teste);

  return (
    <Videos>
      <Container className="container small-container">
        <Fade bottom>
          <h1>
            <span>Confira os melhores</span>
            <br /> momentos da Aguiar Viagens
          </h1>
        </Fade>

        <div className="full-video">
          <iframe
            src="https://www.youtube.com/embed/Qo2oU_6bYaU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="list-videos">
          <Fade>
            <div>
              <img
                src="https://img.youtube.com/vi/yAHn23JRY3k/mqdefault.jpg"
                alt=""
              />
            </div>
          </Fade>

          <Fade delay={200}>
            <div>
              <img
                src="https://img.youtube.com/vi/OP1yKAuo_1Y/mqdefault.jpg"
                alt=""
              />
            </div>
          </Fade>

          <Fade delay={400}>
            <div>
              <img
                src="https://img.youtube.com/vi/RelgnJFcmj8/mqdefault.jpg"
                alt=""
              />
            </div>
          </Fade>

          <Fade delay={600}>
            <div>
              <img
                src="https://img.youtube.com/vi/Ci9DxIu9N2M/mqdefault.jpg"
                alt=""
              />
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <a
            href="#"
            title="Confira os vídeos da Aguiar Viagens no YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreva-se no YouTube
          </a>
        </Fade>
      </Container>
    </Videos>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const channelId = 'UCJy-lSzu5UzVvLn9nXvWovg';

  const apiKey = 'AIzaSyDTz6ZMOPZ9xMn88UjSiiW61yrdvalD-pE';

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=5&key=${apiKey}`
  );

  const data = await response.json();

  return {
    props: {
      videos: data,
      teste: 1
    },
    revalidate: 10,
  };
};
