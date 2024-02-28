import React from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../components/AppBar/AppBar';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollToTop/>
    </>
  );
};

export default Layout;
