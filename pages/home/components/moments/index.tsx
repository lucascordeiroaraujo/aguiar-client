import React from 'react';

import { Container } from '~/styles/global';

import Moments from './style';

import Carousel from 'react-multi-carousel';

// import 'react-multi-carousel/lib/styles.css';

const cpMoments: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Moments>
      <h1>Momentos inesquecíveis a gente nunca esquece</h1>

      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>

      <div>
        <Container className="container">
          <Carousel className="react-multi-carousel" responsive={responsive}>
            <article>
              <img src="https://fakeimg.pl/123x123/" alt="" />

              <h2>Juliana Pablito</h2>

              <div className="stars">
                <i className="icon-star-full active"></i>

                <i className="icon-star-full active"></i>

                <i className="icon-star-full active"></i>

                <i className="icon-star-full active"></i>

                <i className="icon-star-full"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
          </Carousel>
        </Container>
      </div>
    </Moments>
  );
};

export default cpMoments;
