import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';

const Leads = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('leaduri');
  }, []);
  return <div>Leads</div>;
};

export default Leads;
