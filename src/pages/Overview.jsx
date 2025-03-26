import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';

const Overview = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('tablou');
  }, []);
  return <div>Overview</div>;
};

export default Overview;
