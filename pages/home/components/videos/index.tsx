import React from 'react';

import { Container } from '~/styles/global';

import Image from 'next/image';

import Videos from './style';

import Fade from 'react-reveal/Fade';

import { youtubeVideos, contactPage } from '~/interfaces'

interface Iprops {
  videos: youtubeVideos[];
  contact: contactPage;
};

const pageVideos: React.FC<Iprops> = ({ videos, contact }) => {
  const [currentVideo, setCurrentVideo] = React.useState({
    id: videos[0].id.videoId,
    autoPlay: '0'
  })

  const handleChangeVideo = (id: string) => {
    setCurrentVideo({
      id,
      autoPlay: '1'
    });
  };

  let hasContact = null

  if(contact) {
    hasContact = contact.acf
  }

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
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=${currentVideo.autoPlay}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="list-videos">
          {videos.map((video: youtubeVideos, index: number) => {

            if(index <= 3) {
              return (
                <article key={video.id.videoId} className={video.id.videoId === currentVideo.id ? 'active' : ''}>
                  <h2>{video.snippet.title}</h2>

                  <button onClick={() => handleChangeVideo(video.id.videoId)}>
                    <Image
                      src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
                      alt={video.snippet.title}
                      title={video.snippet.title}
                      unsized
                    />
                  </button>
                </article>
              )
            }
          })}
        </div>

        {hasContact && hasContact.youtube && (
          <Fade bottom>
            <a
              href={hasContact.youtube}
              title="Confira os vídeos da Aguiar Viagens no YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscreva-se no YouTube
            </a>
          </Fade>
        )}
      </Container>
    </Videos>
  );
};

export default pageVideos;
