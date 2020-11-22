import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import Seo from '~/seo';

import Loader from '~/components/loader';

import Header from '~/components/header';

import Travel from './components/travel';

import Moments from '~/pages/home/components/moments';

import Pictures from './components/pictures';

import Footer from '~/components/footer'

import { contactPage, itineraries, testimonials } from '~/interfaces';

import getData from '~/services';

import { useRouter } from 'next/router';

interface Iprops {
  post: itineraries[];
  testimonials: testimonials;
  contact: contactPage;
};

export default function Index({ contact, post, testimonials }: Iprops) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  const hasPost = post && post[0];

  const seo = {
    seo_title: hasPost ? post[0].acf.seo_title : '',
    seo_description: hasPost ? post[0].acf.seo_description : '',
    seo_image: hasPost ? post[0].acf.seo_image : ''
  };

  return (
    <>
      <Seo data={seo} />

      <Header 
        fullBanner={true} 
        bannerImage={hasPost ? (post[0].acf.banner ? post[0].acf.banner.url : undefined) : undefined}
        contact={contact} 
      />

      {hasPost && (
        <Travel post={post[0]} />
      )}

      {testimonials && (
        <Moments testimonials={testimonials.acf.testimonials} />
      )}

      {hasPost && post[0].acf.pictures && (
        <Pictures pictures={post[0].acf.pictures} />
      )}

      <Footer contact={contact} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result  = await getData.getPostsSlug();

  interface post {
    slug: string;
  };

  const paths = result.map((post: post) => {
    return { params: { slug: post.slug } }
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any;

  return {
    props: {
      post: await getData.getPost(slug),
      testimonials: await getData.getPage('7'),
      contact: await getData.getPage('11')
    },
    revalidate: 10
  };
};
