import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';

const Clients = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('clienti');
  }, []);
  return <div>Clients</div>;
};

export default Clients;
