import React from 'react';

import { useRouter } from 'next/router';

import Loader from '~/components/loader';

const cpError: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push(`/`)
  }, []);

  return <Loader />

};

export default cpError;
