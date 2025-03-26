import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
const Admin = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('admin');
  }, []);
  return <div>Admin</div>;
};

export default Admin;
