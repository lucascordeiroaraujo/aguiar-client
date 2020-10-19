import React from 'react';

import Moments from './style';

import Slider from 'react-slick';

import Fade from 'react-reveal/Fade';

const cpMoments: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000
  };

  return (
    <Moments>
      <Fade bottom>
        <h1>Momentos inesquecíveis a gente nunca esquece</h1>
      </Fade>

      <div>
        <div className="images">
          <Slider {...settings}>
            <img src="https://picsum.photos/seed/picsum/730/730" alt="" />

            <img src="https://picsum.photos/id/870/730/730?grayscale&blur=2" alt="" />
          </Slider>
        </div>
        
        <div className="slick-container">
          <Slider {...settings}>
            <article>
              <img src="https://picsum.photos/123/123?grayscale" alt="" />

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

            <article>
              <img src="https://picsum.photos/123/123?grayscale" alt="" />

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
          </Slider>
        </div>
      </div>
    </Moments>
  );
};

export default cpMoments;
