import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import React from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
