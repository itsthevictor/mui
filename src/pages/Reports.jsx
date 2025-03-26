import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
const Reports = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('rapoarte');
  }, []);
  return <div>Reports</div>;
};

export default Reports;
