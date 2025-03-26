import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
const Users = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('useri');
  }, []);
  return <div>Users</div>;
};

export default Users;
