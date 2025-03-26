import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';

const Programmes = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('masuri');
  }, []);
  return <div>Programmes</div>;
};

export default Programmes;
