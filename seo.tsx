import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import { seo } from '~/interfaces';

interface Iprops {
  data?: seo;
}

const Seo: React.FC<Iprops> = ({ data }) => {
  const router = useRouter();

  const [state] = React.useState({
    seo_title: 'Aguiar Viagens',
    seo_description: 'Experiências Únicas em cada viagem, conheça a aguiar viagens',
    seo_image: 'http://viagensaguiar-com-br.umbler.net/wp-content/uploads/2020/10/aguiar-social.png'
  });

  const handleData = (field: 'seo_title' | `seo_description` | `seo_image`) => {
    if(data && data[field] && data[field] !== '') {
      return data[field]
    } else {
      return state[field]
    }
  }

  return (
    <Head>
      <title>{handleData('seo_title')}</title>

      <meta name="description" content={handleData('seo_description')} />

      <link
        rel="canonical"
        href={`https://viagensaguiar.com.br/${router.pathname}`}
      />

      <meta property="og:locale" content="pt_BR" />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={handleData('seo_title')} />

      <meta property="og:description" content={handleData('seo_description')} />

      <meta property="og:url" content="https://viagensaguiar.com.br" />

      <meta property="og:site_name" content={handleData('seo_title')} />

      <meta property="og:image" content={handleData('seo_image')} />

      <meta property="og:image:secure_url" content={handleData('seo_image')} />

      <meta property="og:image:width" content="484" />

      <meta property="og:image:height" content="252" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:description" content={handleData('seo_description')} />

      <meta name="twitter:title" content={handleData('seo_title')} />

      <meta name="twitter:image" content={handleData('seo_image')} />
    </Head>
  );
};

export default Seo;
