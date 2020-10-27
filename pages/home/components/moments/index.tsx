import React from 'react';

import Moments from './style';

import Slider from 'react-slick';

import Fade from 'react-reveal/Fade';

import { testimonialsItem } from '~/interfaces'

interface Iprops {
  testimonials: testimonialsItem[];
  hasVideos?: boolean;
};

const cpMoments: React.FC<Iprops> = ({ hasVideos, testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  };

  const stars = [1,2,3,4,5];

  if (!testimonials.length) return null

  return (
    <Moments className={hasVideos ? 'has-videos' : 'not-has-videos'}>
      <Fade bottom>
        <h1>Momentos inesquecíveis a gente nunca esquece</h1>
      </Fade>

      <div>
        <div className="images">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <img 
                  key={index}
                  src={item.travel_image.sizes.testimonials} 
                  alt={item.travel_image.alt} 
                  title={item.travel_image.title} 
                  width={item.travel_image.sizes["testimonials-width"]}
                  height={item.travel_image.sizes["testimonials-height"]}
                />
            ))}
          </Slider>
        </div>

        <div className="slick-container">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <article key={index}>
                <img 
                  src={item.client_image.sizes["testimonials-person"]} 
                  alt={item.client_image.alt} 
                  title={item.client_image.title} 
                  width={item.client_image.sizes["testimonials-person-width"]}
                  height={item.client_image.sizes["testimonials-person-height"]}
                />

                <h2>{item.name}</h2>

                <div className="stars">
                  {Object.values(stars).map(star => (
                    <i key={star} className={`icon-star-full ${star <= parseInt(item.stars, 10) ? 'active' : ''}`}></i>
                  ))}
                </div>

                <p>
                  {item.description}
                </p>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </Moments>
  );
};

export default cpMoments;
