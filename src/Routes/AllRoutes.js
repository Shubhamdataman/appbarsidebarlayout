import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Logout from '../components/Logout';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  );
};

export default AllRoutes;
