import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Container } from '~/styles/global';

import Videos from './style';

export default function cpVideos({
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(videos);

  return (
    <Videos>
      <Container className="container">
        <h1>
          <span>Confira os melhores</span>
          <br /> momentos da Aguiar Viagens
        </h1>

        <div className="full-video">
          <iframe
            src="https://www.youtube.com/embed/Qo2oU_6bYaU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="list-videos">
          <div>
            <img
              src="https://img.youtube.com/vi/yAHn23JRY3k/mqdefault.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://img.youtube.com/vi/OP1yKAuo_1Y/mqdefault.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://img.youtube.com/vi/RelgnJFcmj8/mqdefault.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://img.youtube.com/vi/Ci9DxIu9N2M/mqdefault.jpg"
              alt=""
            />
          </div>
        </div>

        <a
          href="#"
          title="Confira os vídeos da Aguiar Viagens no YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inscreva-se no YouTube
        </a>
      </Container>
    </Videos>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const channelId = 'UCJy-lSzu5UzVvLn9nXvWovg';

  const apiKey = 'AIzaSyDTz6ZMOPZ9xMn88UjSiiW61yrdvalD-pE';

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=5&key=${apiKey}`
  );

  const data = await response.json();

  return {
    props: {
      videos: data.items,
    },
    revalidate: 10,
  };
};
